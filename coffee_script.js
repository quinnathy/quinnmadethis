const textMap = {
    at_home: "Most at-home coffee drinkers are 35~44 year-old white/Caucasian men who label themselves as Democrats.",
    on_go: "Most people who drink coffee on the go are 25~34 year-old women who are politically independent.",
    at_office: "Most coffee drinkers in the office are 25~34 year-old Asian/Pacific Islander men who describe themselves as politically unaffiliated.",
    at_cafe: "Most who enjoy their coffee at a cafe are 25~34 year-old Asian/Pacific Islander non-binary Democrats.",
    pour_over:"Most drip enjoyers prefer a fruity undertone in their coffee, and spend an average of $20~$40 a month on coffee. They also rank second in self-proclaimed expertise, at 6.25/10.",
    espresso:"Espresso lovers tend to enjoy fruity coffee, and spend more monthly, at $40~$60 a month. They've also self-evaluated themselves as the experts of the field.",
    french_press:"French press users enjoy fruity coffee, and enjoy a light blend.",
    machine:"Those who use non-espresso machines to brew coffee tend to enjoy a full-bodied flavor and a medium blend.",
    cold_brew:"Cold brew drinkers like a fruity, light coffee, and are of the higher spenders at $40~$60 a month.",
    capsule:"Those who use capsule coffee machines like Nespresso or Keurig like chocolatey coffees the best, at a medium roast."
  };

  const display = document.getElementById("display");

  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      const container = button.closest(".container");
      const display = container.querySelector(".left p");
      display.textContent = textMap[button.id];

    });
  });