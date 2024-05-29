var quotesConainers = [
  {
    quote: `"Beware of what you become in pursuit of what you want."`,
    author: "Jim Rohn",
  },
  {
    quote: `"It's not what happens to you, but how you react to it that matters."`,
    author: "Epictetus",
  },
  { quote: `"The best revenge is massive success."`, author: "Frank Sinatra" },
  {
    quote: `"You miss 100% of the shots you don't take."`,
    author: "Wayne Gretzy",
  },
  {
    quote: `"Resentment is like drinking poison and waiting for your enemies to die."`,
    author: "Nelson Mandela",
  },
  {
    quote: `"Do not take life too seriously. You will not get out alive."`,
    author: "Elbert Hubbard",
  },
];
var quoteInput = document.getElementById("quoteName");
function newQuote() {
  var cartona = "";
  var rang = Math.random() * quotesConainers.length;
  var randamNum = Math.floor(rang);
  var x = quoteInput.innerText;
  if (x.length != quotesConainers[randamNum].quote.length) {
    cartona = `    
    <div class="img-container my-4 animate__animated animate__flipInX">
    <img src="images/testimonial-2.jpg" alt="">
    </div>    
    <h2 id="quoteName" class="text-center animate__animated animate__fadeInLeft">"${quotesConainers[randamNum].quote}"</h2>
    <h3 class="text-center pb-4 animate__animated animate__fadeInLeft" >--${quotesConainers[randamNum].author}</h3>
    `;

  } else {
    console.log("the same len");
  }
  document.getElementById("quotes").innerHTML=cartona
}
