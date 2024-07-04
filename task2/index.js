
      var tablinks = document.getElementsByClassName("tab-links");
      var tabcontents = document.getElementsByClassName("tab-contents");

      function opentab(event, tabname) {
        for (tablink of tablinks) {
          tablink.classList.remove("active-link");
        }

        for (tabcontent of tabcontents) {
          tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
      }


    
      var sidemenu = document.getElementById("sidemenu");

      function openmenu() {
        sidemenu.style.right = "0";
      }
      function closemenu() {
        sidemenu.style.right = "-200px";
      }
    

      document.addEventListener("DOMContentLoaded", function () {
        var utcTimeElement = document.getElementById("utc-time");

        setInterval(function () {
          var now = new Date();
          var utcString =
            now.toISOString().slice(0, 19).replace("T", " ") + " UTC";
          utcTimeElement.textContent = "Current Time in UTC:" + utcString;
        }, 1000); // Update every second
      });
    
  // Get the current date
    const currentDate = new Date();

    // Days of the week array
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get the current day of the week (0-6)
    const dayOfWeekIndex = currentDate.getDay();

    // Display the current day of the week in your HTML
    document.getElementById("currentDayOfWeek").textContent = "Current day of the week: " + daysOfWeek[dayOfWeekIndex];
