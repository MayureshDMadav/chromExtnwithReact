import React from "react";
import { render } from "react-dom";

const background = () => {
  try {
    const clickOnDelay = (element, delay, words) => {
      try {
        setTimeout(() => {
          console.log(`Clicking on ${words}`);
          let inputElement = document.querySelectorAll(element);
          let arrayOfElement = Array.from(inputElement);
          for (let a in arrayOfElement) {
            if (arrayOfElement[a].textContent === words) {
              arrayOfElement[a].click();
            }
          }
        }, delay);
      } catch (e) {
        console.log(`Skipping Process for ${words}`);
      }
    };

    const inputFieldProcess = (element, delay, words, appName) => {
      try {
        setTimeout(() => {
          console.log(`Giving an ${words}`);
          let inputElement = document.querySelectorAll(element);
          let appTextInput = document
            .querySelectorAll(appName)[1]
            .querySelectorAll("p");
          let appNameInput = "";
          if (appTextInput) {
            appNameInput = appTextInput[0].textContent.split(".")[0];
          } else {
            appNameInput = appTextInput[1].textContent.split(".")[0];
          }
          let inputSelect = inputElement[0];
          if (inputElement[0].getAttribute("placeholder")) {
            inputSelect = inputElement[1];
          }
          inputSelect.value = `${appNameInput}-simpl-app`;
          const inputEvent = new Event("input", { bubbles: true });
          inputEvent.simulated = true;
          inputSelect.dispatchEvent(inputEvent);
          const inputChangeEvent = new Event("change", { bubbles: true });
          inputSelect.dispatchEvent(inputChangeEvent);
          const inputBlurEvent = new Event("blur", { bubbles: true });
          inputSelect.dispatchEvent(inputBlurEvent);
        }, delay);
      } catch (e) {}
    };

    const adminApiCheckBoxSelection = (element, delay, words) => {
      try {
        setTimeout(() => {
          console.log(`Selecting ${words}`);
          let checkBoxes = document.querySelectorAll(element);
          let checkBoxArr = Array.from(checkBoxes);
          checkBoxArr.forEach((element, index) => {
            if (
              [
                0, 1, 3, 4, 6, 8, 10, 12, 14, 16, 18, 19, 21, 23, 25, 27, 29,
                31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61,
                63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 82, 83, 84, 85, 87, 89,
                91, 93, 94, 96, 98, 100, 102, 104, 106, 108,
              ].includes(index)
            )
              element.click();
          });
        }, delay);
      } catch (e) {}
    };

    const gettingStoreFrontApiScopesAndInstalling = (element, delay, words) => {
      try {
        setTimeout(() => {
          console.log(`Selecting ${words[0]}`);
          let inputElement = document.querySelectorAll(element[0]);
          let arrayOfElement = Array.from(inputElement);
          if (
            arrayOfElement[arrayOfElement.length - 1].textContent ===
            "Configure"
          ) {
            arrayOfElement[arrayOfElement.length - 1].click();
          }
        }, delay);

        setTimeout(() => {
          console.log("Checking StoreFront Api scopes");
          let storefrontScopeElements = document.querySelectorAll(element[1]);
          let scopeArray = Array.from(storefrontScopeElements);
          scopeArray.forEach((element, index) => {
            if ([0, 2, 3, 6, 7, 11, 12, 14].includes(index)) {
              element.click();
            }
          });
        }, delay + 4000);

        setTimeout(() => {
          console.log("Checking StoreFront Api scopes");
          let storefrontScopeElements = document.querySelectorAll(element[1]);
          let scopeArray = Array.from(storefrontScopeElements);
          scopeArray.forEach((element, index) => {
            if ([5, 8, 9, 10].includes(index)) {
              element.click();
            }
          });
        }, delay + 9000);

        setTimeout(() => {
          console.log(`Selecting ${words[1]} Button`);
          let buttonElement = document.querySelectorAll(element[2]);
          let arrayOfButton = Array.from(buttonElement);
          for (let a in arrayOfButton) {
            if (arrayOfButton[a].textContent === "Save") {
              arrayOfButton[a].click();
            }
          }
        }, delay + 16000);

        setTimeout(() => {
          console.log(`Installing Application`);
          let installApplicationButtonElement = document.querySelectorAll(
            element[2]
          );
          let arrayOFButtons = Array.from(installApplicationButtonElement);
          for (let a in arrayOFButtons) {
            if (arrayOFButtons[a].textContent === "Install app") {
              arrayOFButtons[a].click();
            }
          }
        }, delay + 21000);

        setTimeout(() => {
          let installApplicationButtonElement = document.querySelectorAll(
            element[2]
          );
          let arrayOFButtons = Array.from(installApplicationButtonElement);
          if (
            arrayOFButtons[arrayOFButtons.length - 1].textContent === "Install"
          ) {
            arrayOFButtons[arrayOFButtons.length - 1].click();
          }
        }, delay + 27000);
      } catch (e) {
        console.log(`Skipping Process for ${words[1]}`);
      }
    };

    const fetChingCredentials = (element, delay) => {
   
      try {
        setTimeout(() => {
          let inputTag = document.querySelectorAll(element);
          let inputArr = Array.from(inputTag);
          let urlPath = window.location.pathname;
          let urlPatharr = urlPath.split("/");
          let credentials = [];
          for (let a in inputArr) {
            credentials.push(inputArr[a].value);
          }
          let jsonResponse = {
            merchant_name: urlPatharr[2],
            access_token: credentials[0],
            storefront_apiKey: credentials[1],
            app_key: credentials[2],
            app_secret: credentials[3],
            app_id: urlPatharr[6],
          };
          
          console.log(JSON.stringify(jsonResponse,null,2))

        }, delay);

       
      } catch (e) {
        console.log("Error while Fetching Credentials");
      }
    };

    clickOnDelay("a[href]", 100, "Settings");
    clickOnDelay("a[href]", 3000, "Apps and sales channels");
    clickOnDelay("a[href]", 6000, "Develop apps");
    clickOnDelay("a[href]", 9000, "Allow custom app development");
    clickOnDelay(
      "button[type='button']",
      11000,
      "Allow custom app development"
    );
    clickOnDelay("button[type='button']", 13000, "Create an app");
    inputFieldProcess("input[type]", 15000, "AppName", "nav");
    clickOnDelay("button[type='button']", 18000, "Create app");
    clickOnDelay("a[href]", 23000, "Configure Admin API scopes");
    adminApiCheckBoxSelection(
      "input[type='checkbox']",
      25000,
      "Admin Api Scopes"
    );
    clickOnDelay("button[type='button']", 30000, "Save");
    clickOnDelay("a[href]", 35000, "Configuration");
    gettingStoreFrontApiScopesAndInstalling(
      ["a[href]", "input[type='checkbox']", "button[type='button']"],
      39000,
      ["Configure", "Save"]
    );
    clickOnDelay("button[type='button']", 70000, "Reveal token once");
    fetChingCredentials("input[type]", 74000);
  } catch (e) {
    console.log(e);
    console.log("Error while processing Request");
  }
};

const Popup = () => {

  let styles = `
  #btn_start{
    background-color: #4CAF50; 
    color:white;
    padding:5px 10px;
    width:100%;
    font-size:14px;
    border:none;
    border-radius:5px;
    text-transform:Uppercase;
    text-align:center;
  }

  body{
    width:auto;
  }

  #start_auto{
    display:none;
    text-align:center;
  }

  #container{
    display:grid;
    justify-content:center;
    width:100%;
  }
  `;

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let creDentials = request.jsonResponse;
    if (creDentials) {
      para.style.display = "none";
      button.style.display = "block";
      console.log("App Installed Success");
    }
  });

  const processRequest = async () => {
    let para = document.querySelector("#start_auto");
    let button = document.querySelector("#btn_start");
    button.style.display = "none";
    para.style.display = "block";
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: background,
    });
  };

  return (
    <div>
      <style>{styles} </style>
      <button onClick={processRequest} id="btn_start" type="submit">
        Start
      </button>
      <p id="start_auto">Automation In Progress..</p>
    </div>
  );
};

render(<Popup />, document.getElementById("root"));
