
class Password {
    constructor() {
        this.upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.lowerCase = "abcdefghijklmnopqrstuvwxyz";
        this.nums = "1234567890";
        this.specialSymbol = "!@#$%^&*-+/~";
    }

    suggestFunnyPassword() {
        let funnyPassArray = ["Password", "I am password", "Hello123", "Invalid Password", "Incorrect", "Try Again", "ineedapassword", "changeme", "secret", "iamforgetful", "newpassword", "IamACompleteIdiot", "nothing", "nothingagain", "iforgot", "whydoialwaysforget", "qwerty"]
        return funnyPassArray[Math.floor(Math.random() * funnyPassArray.length)]
    }

    suggestNormalPassword() {
        let password = ""
        for (let i = 0; i < 8; i++) {
            let sample = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"]
            let whichString = Math.floor(Math.random() * 2)
            let whichSchar = Math.floor(Math.random() * 26)
            password += sample[whichString][whichSchar]
        }
        return password
    }

    suggestStrongPassword() {
        let password = ""
        for (let i = 0; i < 14; i++) {
            let sample = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "1234567890", "!@#$%^&*/~"]
            let whichString = Math.floor(Math.random() * 4)
            if (whichString == 2 || whichString == 3) {
                var mult = 10
            } else {
                var mult = 26
            }
            let whichSchar = Math.floor(Math.random() * mult)
            password += sample[whichString][whichSchar]
        }
        return password
    }
}

// console.log(obj.suggestFunnyPassword())
// console.log(obj.suggestNormalPassword())
// console.log(obj.suggestStrongPassword())


function generatePassword() {
    let obj = new Password()
    let ele = document.getElementsByName("passwordType")
    let val;
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            val = ele[i].value
        }
    }
    if (val == "suggestFunnyPassword") {
        document.getElementById("passwordArea").innerHTML = obj.suggestFunnyPassword()
    } else if (val == "suggestNormalPassword") {
        document.getElementById("passwordArea").innerHTML = obj.suggestNormalPassword()
    } else {
        document.getElementById("passwordArea").innerHTML = obj.suggestStrongPassword()
    }

    document.getElementById("copybtn").innerHTML = "Copy"
}


function copyFunction() {
    document.getElementById("copybtn").innerHTML = "Copied!"
    var copyText = document.getElementById("passwordArea").innerHTML;
    copyText.select;
    navigator.clipboard.writeText(copyText);
}


