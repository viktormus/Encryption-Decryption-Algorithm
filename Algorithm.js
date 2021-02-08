//Program that takes typed text and converts it into random letters. It can also convert it back. Eg. primroidal encryption (cool version!)
// Eg. tommi -> qTgyx Ovland peM si rnvMäls Ihcpsn
// -> if 5 letters in a word, take 2nd letter
// -> if 6 letters in a word, take 1st letter
// -> if 3 letters in a word, take 3rd letter
// -> if 2 letters in a word, ignore
// -> if 7 letters in a word, take 4th letter

/*
Tähän mennessä ei toimi
- Isot kirjaimet
- Merkit
- Numerot

Eli pelkästään pienet kirjaimet ja välilyönnit toimii.
*/

//first 3000 decimals of pi
var decimals = "141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198938095257201065485863278865936153381827968230301952035301852968995773622599413891249721775283479131515574857242454150695950829533116861727855889075098381754637464939319255060400927701671139009848824012858361603563707660104710181942955596198946767837449448255379774726847104047534646208046684259069491293313677028989152104752162056966024058038150193511253382430035587640247496473263914199272604269922796782354781636009341721641219924586315030286182974555706749838505494588586926995690927210797509302955321165344987202755960236480665499119881834797753566369807426542527862551818417574672890977772793800081647060016145249192173217214772350141441973568548161361157352552133475741849468438523323907394143334547762416862518983569485562099219222184272550254256887671790494601653466804988627232791786085784383827967976681454100953883786360950680064225125205117392984896084128488626945604241965285022210661186306744278622039194945047123713786960956364371917287467764657573962413890865832645995813390478027590099465764078951269468398352595709825822620522489407726719478268482601476990902640136394437455305068203496252451749399651431429809190659250937221696461515709858387410597885959772975498930161753928468138268683868942774155991855925245953959431049972524680845987273644695848653836736222626099124608051243884390451244136549762780797715691435997700129616089441694868555848406353422072225828488648158456028506016842739452267467678895252138522549954666727823986456596116354886230577456498035593634568174324112515076069479451096596094025228879710893145669136867228748940560101503308617928680920874760917824938589009714909675985261365549781893129784821682998948722658804857564014270477555132379641451523746234364542858444795265867821051141354735739523113427166102135969536231442952484937187110145765403590279934403742007310578539062198387447808478489683321445713868751943506430218453191048481005370614680674919278191197939952061419663428754440643745123718192179998391015919561814675142691239748940907186494231961";

console.log("Enter the text that you want to encrypt:");

var text = "katso tommi millaisen salauslaitteen minä keksin";
//var text = "testi 69 ja ''ei'' kai siinä muuta! se sitten vielä tästä mojresta GaiGille 1234567890 .,ö<z'¨´+?=)(!#!¤%&>"
//var text = "moro kaikille ette saa ikinä tätä ratkastua lol";

text = text.toLowerCase();
text = text.trim();

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

var symbols = [".", ",", "!", "?", ":", ";", "'", "-", "_", "(", ")", "=", "+", "%", "&", "/", "#", "@", "<", ">"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var textChar = [];

//Random Letter
function randomizer() {
	var any = Math.floor(Math.random() * 29);
//	console.log(alphabet[any]);
	return alphabet[any];
}

//Text to array
function splitText(item) {
	textChar = [];
	for (i = 0; i < item.length; i++) {
		textChar.push(text[i]);
	}
}

//Some printing
function iterate() {
	for (i = 0; i < text.length; i++) {
//		console.log(text[i]);
	}
}

//In-depth scan of the text, for encryption purposes
var words = 0;
var wordLengths = [];
var letters = 0;
var iLetters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function scan() {
	var wordL = 0;
	for (i = 0; i < text.length; i++) {
		if (text[i] == " ") {
			words++;
			wordLengths.push(wordL);
			letters += wordL
			wordL = -1;
		}
		wordL++;
	}
	wordLengths.push(wordL);
	letters += wordL
	words++;
	for (i = 0; i < alphabet.length; i++) {
		letterCount = 0;
		for (j = 0; j < text.length; j++) {
			if (alphabet[i] == text[j]) {
				letterCount++;
			}
		}
		iLetters.splice(i, 1, letterCount);
	}
}

//Key generator
var key = 0;
function keyGen() {
	key = words * letters - letters;
	console.log("Key: " + key);
	return key;
}

//Relevant letter positions amidst gibberish
function posBasedOnLength(wl) {
	switch (true) {
	  case (wl == 4):
	  	return 2;
	  case (wl == 5):
	  	return 2;
	  case (wl == 6):
	  	return 1;
	  case (wl == 7):
	  	return 4;
	  case (wl == 8):
	  	return 0;
	  case (wl == 9):
	  	return 8;
	  case (wl == 10):
	  	return 3;
	  case (wl == 11):
	  	return 8;
	  case (wl == 12):
	  	return 6;
	  case (wl == 13):
	  	return 12;
	}
}

//First encryption: using pi's decimals to change letters
var code = "";
function encryptOne() {
	for (i = 0; i < textChar.length; i++) {
		var shift = parseInt(decimals[key + i], 10);
//		console.log("shift " + shift);
		var original = 0;
		for (j = 0; j < alphabet.length; j++) {
			if (textChar[i] == alphabet[j]) {
				original = j;
//				console.log("original " + original);
				break;
			}
		}
		var change = alphabet[original + shift]
		if (textChar[i] != " ") {
			textChar.splice(i, 1, change);
		}
	}
	code = textChar.join("");
	text = code;
}

//Second encryption: adding random letters to distract
var gibberish = [];
function encryptTwo() {
	var long = 0;
	var tempList = [];
	for (i = 0; i < text.length; i++) {
		long = 0;
		if (text[i] == " ") {
			tempList = [];
			long = Math.floor(Math.random() * 3 + 1);
			for (j = 0; j < long; j++) {
				tempList.push(randomizer());
			}
			var rdy = tempList.join("");
			gibberish.push(rdy);
		} else {
			tempList = [];
			long = Math.floor(Math.random() * 10 + 3 + 1);
			var pos = posBasedOnLength(long);
			for (j = 0; j < long; j++) {
				if (j == pos) {
					tempList.push(text[i]);
				} else {
					tempList.push(randomizer());
				}
			}
			var rdy = tempList.join("");
			gibberish.push(rdy);
		}

	}
}

var test = randomizer();
//console.log(test);
splitText(text);
//console.log(textChar);
scan();
//console.log(words);
//console.log(iLetters);
//console.log(wordLengths);
//console.log(letters);
console.log("---");
console.log(text);
keyGen();
encryptOne();
encryptTwo();

console.log("---");
console.log(text);
console.log("---");
console.log(...gibberish);
console.log("---");


//Second decryption: removing misleading letters
var decryptedText = "";
var decryptedWords = [];
function decryptTwo() {
	var tempList = [];
	for (i = 0; i < gibberish.length; i++) {
		if (gibberish[i].length > 3) {
			var pos = posBasedOnLength(gibberish[i].length);
			decryptedWords.push(gibberish[i][pos]);
		} else {
			decryptedWords.push(" ");
		}
	}
	decryptedText = decryptedWords.join("");
	console.log(decryptedText);
}
decryptTwo();
//console.log(decryptedWords);

//First decryption: returning the original letters
var clearText = "";
function decryptOne() {
	splitText(decryptedText);
	var key = keyGen();
	for (i = 0; i < textChar.length; i++) {
		var shiftB = parseInt(decimals[key + i], 10);
		for (j = 0; j < alphabet.length; j++) {
			if (textChar[i] == alphabet[j] && j - shiftB >= 0) {
				var changeB = alphabet[j - shiftB];
				textChar.splice(i, 1, changeB);
				break;
			}
		}
	}
	clearText = textChar.join("");
	console.log(clearText);
}
decryptOne();
