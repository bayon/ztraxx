
  function validUppercaseLetter(arg) {
    if (!arg.match(/[A-Z]/)) {
      return alert("Include a upper case letter in your password");
    }
  }
  function validLowercaseLetter(arg) {
    if (!arg.match(/[a-z]/)) {
      return alert("Include a lower case letter in your password");
    }
  }

  function validNumber(arg) {
    if (!arg.match(/[0-9]/)) {
      return alert("Include a number in your password");
    }
  }

  function validSpecialCharacter(arg) {
    if (!arg.match(/[\?~!@#$%^&*()\-=+{}|\]\[;:<>/'"`,.]/)) {
      return alert("Include a special character in your password");
    }
  }

  function validLength(arg, length) {
    if (arg.length < length) {
      return alert(
        `Make sure your password is at least ${length} characters long`
      );
    }
  }

  function validNoSpaces(arg) {
    if (arg.match(/[\s\\]/)) {
      return alert("Remove all  and spaces from your password");
    }
  }