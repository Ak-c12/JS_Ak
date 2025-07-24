 
    function changeContent() {
        document.getElementById("example1").innerHTML =
          " <strong> Changed using innerHTML! </strong> ";
        document.getElementById("example1").style.color = "red";

        document.getElementById("example2").textContent =
          " this is changed using textContent!";
        document.getElementById("example2").style.color = "white";
      }
      function addClass() {
        const example1 = document.getElementById("example1");
        example1.classList.add("new-class");
        example1.style.backgroundColor = "green";
        example1.style.padding = "10px";
        example1.style.fontSize = "20px";
        example1.style.borderRadius = "5px";

        const example2 = document.getElementById("example2");
        example2.classList.add("Sec-class");
        example2.style.backgroundColor = "brown";
        example2.style.padding = "10px";
        example2.style.borderRadius = "5px";
      }

      let button = document.getElementById("myButton");
      button.addEventListener(
        "click",
        function () {
          alert("button clicked!");
        },
        false
      ); // false means the event will be captured in the bubbling phase

      let link = document.getElementById("myLink");
      link.addEventListener(
        "click",
        function (e) {
          event.preventDefault(); // Prevents the default action of the link
          alert("Link clicked! But navigation is prevented.");
          link.event.stopPropagation(); // Stops the event from bubbling up to parent elements
        },
        false
      );

      document
        .querySelector("#firstImg")
        .addEventListener("click", function (e) {
          console.log(e.target.tagName);
          if (e.target.tagName === "IMG") {
            console.log(e.target.id);
            let removeIt = e.target.parentNode;
            removeIt.remove(); // This will remove the entire <li> element containing the image
          }
        });

      let up = document.getElementById("upPara");
      let down = document.getElementById("downPara");
      let divBox = document.getElementById("div_box");
      up.innerHTML = "Click the button to remove the div box";
      function removeFun() {
        divBox.remove();
        down.innerHTML = "Div box removed successfully!";
      }

      const changeText = function () {
        document.querySelector("h1").innerHTML = "Can't wait to complete JS!";
        document.querySelector("h1").style.color = "blue";
      };
      // setTimeout(changeText, 2000); // Change the text after 2 seconds
      setInterval(function () {
        document.querySelector("h1").style.color =
          document.querySelector("h1").style.color === "blue" ? "red" : "blue";
      }, 1000); // Toggle color every second
      // setInterval(changeText, 2000); // Change the text every 2 seconds
