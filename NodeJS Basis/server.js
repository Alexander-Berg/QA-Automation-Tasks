'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);


< !DOCTYPE html >
    <html>
        <body>

            <h2>What Can JavaScript Do?</h2>

            <p id="demo">JavaScript can change HTML content.</p>

            <button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

        </body>
    </html>
<!DOCTYPE html >
    <html>
        <body>

            <h2>JavaScript Statements</h2>

            <p>A <b>JavaScript program</b> is a list of <b>statements</b> to be executed by a computer.</p>

            <p id="demo"></p>

            <script>
                var x, y, z;  // Declare 3 variables
                x = 5;    // Assign the value 5 to x
                y = 6;    // Assign the value 6 to y
                z = x + y;  // Assign the sum of x and y to z

                document.getElementById("demo").innerHTML =
                "The value of z is " + z + ".";
</script>

        </body>
    </html>
<!DOCTYPE html >
    <html>
        <body>

            <h2>JavaScript Strings</h2>

            <p>Strings can be written with double or single quotes.</p>

            <p id="demo"></p>

            <script>
                document.getElementById("demo").innerHTML = 'John Doe';
</script>

        </body>
    </html>
<!DOCTYPE html >
    <html>
        <body>

            <h2>JavaScript Statements</h2>

            <p>In HTML, JavaScript statements are executed by the browser.</p>

            <p id="demo"></p>

            <script>
                document.getElementById("demo").innerHTML = "Hello Dolly.";
</script>

        </body>
    </html>
<!DOCTYPE html >
    <html>
        <body>

            <h1 id="myH"></h1>
            <p id="myP"></p>

            <script>
                // Change heading:
                document.getElementById("myH").innerHTML = "JavaScript Comments";
                // Change paragraph:
                document.getElementById("myP").innerHTML = "My first paragraph.";
</script>

        </body>
    </html>
<!DOCTYPE html >
    <html>
        <body>

            <h2>JavaScript Variables</h2>

            <p>In this example, x, y, and z are variables.</p>

            <p id="demo"></p>

            <script>
                var x = 5;
                var y = 6;
                var z = x + y;
                document.getElementById("demo").innerHTML =
                "The value of z is: " + z;
</script>

        </body>
    </html>
<!DOCTYPE html >
    <html>
        <body>

            <h2>JavaScript Operators</h2>

            <p>In this example, y is incremented before it is assigned to x (pre-incremented).</p>

            <p id="demo1"></p>
            <p id="demo2"></p>

            <script>
                var y = 5;
                var x = ++y;
                document.getElementById("demo1").innerHTML = y;
                document.getElementById("demo2").innerHTML = x;
</script>

        </body>
    </html>
<!DOCTYPE html >
    <html>
        <body>

            <h2>The %= Operator</h2>

            <p id="demo"></p>

            <script>
                var x = 10;
                x %= 5;
                document.getElementById("demo").innerHTML = x;
</script>

        </body>
    </html>
<!DOCTYPE html >
    <html>
        <body>

            <h2>JavaScript Operators</h2>

            <p>Adding a number and a string, returns a string.</p>

            <p id="demo"></p>

            <script>
                let x = 5 + 5;
                let y = "5" + 5;
                let z = "Hello" + 5;
                document.getElementById("demo").innerHTML =
x + "<br>" + y + "<br>" + z;
</script>

</body>
</html>
        <!DOCTYPE html>
<html>
            <body>

                <h2>JavaScript Variables</h2>

                <p id="demo"></p>

                <script>
                    // Create and display a variable:
                    let car = "Fiat";
                    document.getElementById("demo").innerHTML = car;
</script>

            </body>
        </html>
        <!DOCTYPE html>
<html>
            <body>

                <p>Click "Try it" to call a function with arguments</p>

                <button onclick="myFunction('Harry Potter','Wizard')">Try it</button>

                <p id="demo"></p>

                <script>
                    function myFunction(name,job) {
                        document.getElementById("demo").innerHTML = "Welcome " + name + ", the " + job + ".";
}
</script>

            </body>
        </html>
        <!DOCTYPE html>
<html>
            <body>

                <h2>JavaScript HTML Events</h2>
                <button onclick="this.innerHTML=Date()">The time is?</button>

            </body>
        </html>
        <!DOCTYPE html>
<html>
            <body>

                <h2>JavaScript String Methods</h2>
                <p>Display the first array element, after a string split:</p>

                <p id="demo"></p>

                <script>
                    let text = "a,b,c,d,e,f";
                    const myArray = text.split(",");
                    document.getElementById("demo").innerHTML = myArray[0];
</script>

            </body>
        </html>
        <!DOCTYPE html>
<html>
            <body>

                <h2>JavaScript Numbers</h2>

                <p>Numeric constants, preceded by 0x, are interpreted as hexadecimal:</p>

                <p id="demo"></p>

                <script>
                    let x = 0xFF;
                    document.getElementById("demo").innerHTML = "0xFF = " + x;
</script>

            </body>
        </html>
        <!DOCTYPE html>
<html>
            <body>

                <h2>JavaScript Number Properties</h2>

                <p>POSITIVE_INFINITY</p>

                <p id="demo"></p>

                <script>
                    let x = Number.POSITIVE_INFINITY;
                    document.getElementById("demo").innerHTML = x;
</script>

            </body>
        </html>
        <!DOCTYPE html>
<html>
            <body>

                <h2>JavaScript Celcius to Fahrenhet</h2>

                <p>Insert a number into one of the input fields below:</p>

                <p><input id="c" onkeyup="convert('C')"> degrees Celsius</p>

                    <p><input id="f" onkeyup="convert('F')"> degrees Fahrenheit</p>

                        <p>Note that the <b>Math.round()</b> method is used, so that the result will be returned as an integer.</p>

                        <script>
                            function convert(degree) {
  var x;
  if (degree == "C") {
                                x = document.getElementById("c").value * 9 / 5 + 32;
    document.getElementById("f").value = Math.round(x);
  } else {
                                x = (document.getElementById("f").value - 32) * 5 / 9;
    document.getElementById("c").value = Math.round(x);
  }
}
</script>

</body>
</html>
                <!DOCTYPE html>
<html>
                    <body>

                        <h2>JavaScript Math</h2>

                        <p>Math.floor(Math.random() * 10) + 1) returns a random integer between 1 and 10
(both included):</p>

                        <p id="demo"></p>

                        <script>
                            document.getElementById("demo").innerHTML =
                            Math.floor(Math.random() * 10) + 1;
</script>

                    </body>
                </html>
                <!DOCTYPE html>
<html>

                    <body onload="startTime()">

                        <h2>JavaScript Clock</h2>

                        <div id="txt"></div>

                        <script>
                            function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
</script>

                    </body>
                </html>
                <!DOCTYPE html>
<html>
                    <body>

                        <h2>JavaScript Error Handling</h2>

                        <p>This example demonstrates how to use <b>catch</b> to diplay an error.</p>

                        <p id="demo"></p>

                        <script>
                            try {
                                adddlert("Welcome guest!");
}
catch(err) {
                                document.getElementById("demo").innerHTML = err.message;
}
</script>

                    </body>
                </html>
                <!DOCTYPE html>
<html>

                    <script>
                        var txt = "";
function message() {
  try {
                            adddlert("Welcome guest!");
  }
  catch(err) {
                            txt = "There was an error on this page.\n\n";
    txt += "Click OK to continue viewing this page,\n";
    txt += "or Cancel to return to the home page.\n\n";
    if(!confirm(txt)) {
                            document.location.href = "https://www.w3schools.com/";
    }
  }
}
</script>

                    <body>

                        <h2>JavaScript Error Handling</h2>

                        <input type="button" value="View message" onclick="message()" />

                    </body>
                </html>
                <!DOCTYPE html>
<html>
                    <head>
                        <script>
                            onerror = handleErr;
                            var txt = "";
function handleErr(msg, url, l) {
                                txt = "There was an error on this page.\n\n";
  txt += "Error: " + msg + "\n";
  txt += "URL: " + url + "\n";
  txt += "Line: " + l + "\n\n";
  txt += "Click OK to continue.\n\n";
  alert(txt);
  return true;
}

function message() {
                                adddlert("Welcome guest!");
}
</script>
                    </head>

                    <body>
                        <input type="button" value="View message" onclick="message()" />
                    </body>

                </html>
                <!DOCTYPE html>
<html>
                    <body>

                        <h2>JavaScript Regular Expressions</h2>

                        <p>Search a string for "w3Schools", and display the position of the match:</p>

                        <p id="demo"></p>

                        <script>
                            let text = "Visit W3Schools!";
                            let n = text.search(/w3Schools/i);
                            document.getElementById("demo").innerHTML = n;
</script>

                    </body>
                </html>
                <!DOCTYPE html>
<html>
                    <body>

                        <h2>JavaScript Objects</h2>
                        <p>JavaScript objects are mutable.</p>
                        <p>Any changes to a copy of an object will also change the original object:</p>

                        <p id="demo"></p>

                        <script>
                            const person = {
                                firstName: "John",
  lastName: "Doe",
  age:50,
  eyeColor: "blue"
};

const x = person;
x.age = 10;

document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";
</script>

                    </body>
                </html>
                <!DOCTYPE html>
<html>
                    <body>

                        <h2>Access Nested JavaScript Objects</h2>
                        <p id="demo"></p>

                        <script>
                            const myObj = {
                                "name":"John",
  "age":30,
  "cars": {
                                "car1":"Ford",
  "car2":"BMW",
  "car3":"Fiat"
  }
}
document.getElementById("demo").innerHTML = myObj.cars.car2;
</script>

                    </body>
                </html>
                <!DOCTYPE html>
<html>
                    <body>

                        <h2>Get JSON Data from a PHP Server</h2>
                        <p>The JSON received from the PHP file:</p>

                        <p id="demo"></p>

                        <script>
                            const dbParam = JSON.stringify({"limit":10});

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
                                document.getElementById("demo").innerHTML = this.responseText;
}
xmlhttp.open("GET", "json_demo_db.php?x=" + dbParam);
xmlhttp.send();
</script>

                    </body>
                </html>
                <!DOCTYPE html>
<html>
                    <body>

                        <h2>Make a table based on the value of a drop down menu.</h2>

                        <select id="myselect" onchange="change_myselect(this.value)">
                            <option value="">Choose an option:</option>
                            <option value="customers">Customers</option>
                            <option value="products">Products</option>
                            <option value="suppliers">Suppliers</option>
                        </select>

                        <p id="demo"></p>

                        <script>
                            function change_myselect(sel) {
  const dbParam = JSON.stringify({table:sel,limit:20});
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function() {
                                myObj = JSON.parse(this.responseText);
    text = "<table border='1'>"
    for (x in myObj) {
                                    text += "<tr><td>" + myObj[x].name + "</td></tr>";
    }
    text += "</table>"
    document.getElementById("demo").innerHTML = text;
  }
  xmlhttp.open("POST", "json_demo_html_table.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send("x=" + dbParam);
}
</script>

                    </body>
                </html>


