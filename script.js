

onload = () => {
  
  // 1.
  orderButton.addEventListener("click", () => {
    const sorryMsg = "Sorry this, This product is out of stock.";
    return alertMsg.innerHTML = sorryMsg;
  });

  // 2.
  let loveState = false;

  loveButton.addEventListener("click", () => {
    const li = document.createElement("li");
    loveState ? (li.innerHTML = "Love") : (li.innerHTML = "Not love");
    loveList.append(li);
    loveState = !loveState;
  });

  // 3.
  mode.addEventListener("click", () => {
    const lightMode = document.querySelector(".light-mode");
    const darkMode = document.querySelector(".dark-mode");

    if (lightMode !== null) {
      mode.innerHTML = "Light Mode";
      //   lightMode.classList.remove("light-mode");
      //   lightMode.classList.add("dark-mode");
      lightMode.classList.toggle("dark-mode");
    } else if (darkMode !== null) {
      mode.innerHTML = "Dark Mode";
      //   darkMode.classList.remove("dark-mode");
      //   darkMode.classList.add("light-mode");
      darkMode.classList.toggle("light-mode");
    } else {
      console.warn("Something Wrong happened!");
    }
  });

  // 4. Not the best way, maybe to use "click" instead "change" and toggle classes
  // instead changing the inline style with value of the html
  chooseColor.addEventListener("change", (e) => {
    document.querySelector("body div").style.backgroundColor = e.target.value
  });

  //5.
  plus.addEventListener("click", () => {
    count.innerHTML = parseInt(count.innerHTML) + 1;
  });
  minus.addEventListener("click", () => {
    count.innerHTML = count.innerHTML - 1;
  });

  // 6.
  let emails = ["jb.haim.rubin@gmail.com", "yossi@gmail.com", "avi@gmail.com"];
  checkEmail.addEventListener("click", () => {
    if (emails.includes(email.value)) {
      result.innerHTML = "Not Available";
      email.style.borderColor = "red";
    } else {
      result.innerHTML = "Available";
      email.style.borderColor = "green";
      emails.push(email.value)
    }
  });

};
