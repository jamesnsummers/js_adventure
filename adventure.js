var yourName, greeting, forReal, adventure, heights, falling, water, traveling,
  outside, carsBooksArchitecture, breath, carsBooksArchitecture, notSure, activeOrRestful,
  roadTrip, butItsSoNice, book, downAndUp, empireState, freeDive, snorkel, onePlaceOrMany;

yourName = prompt('Oh, hi. I didnt see you there. Whats your name?');

if (yourName) {
  greeeting = prompt('Well hello ' + yourName + ', its nice to meet you. Press Enter to continue.');
} else {
  forReal = prompt('Hey for real...whats your name?');
  while (forReal === '') {
    forReal = prompt('Hey for real...whats your name?');
  }
  prompt('Well hello ' + forReal + ', its nice to meet you. Press Enter to continue.');
}

adventure = prompt("Do you like harrowing adventures? (Y / N / ?)");
adventure = adventure.toLowerCase();

if (adventure === 'y') {
  heights = prompt('Are you afraid of heights? (Y/N)');
  heights = heights.toLowerCase();

  if (heights === 'n') {
    falling = prompt('Do you like falling? (Y/N)');
    falling = falling.toLowerCase();

    if (falling === 'y') {
      downAndUp = prompt('Do you like falling then coming back up? (Y / N)');
      downAndUp = downAndUp.toLowerCase();

      if (downAndUp === 'y') {
        var bungee = prompt('You won a free bungee jumping experience!');
      } else if (downAndUp === 'n') {
        var skyDive = prompt('You won a free sky-diving excursion!');
      }
    } else if (falling === 'n') {
      water = prompt('Are you afraid of the water? (Y/N)');
      water = water.toLowerCase();

      if (water === 'y') {
        pickOne = prompt('Pick one: Books, Cars, Architecture');
        pickOne = pickOne.toLowerCase();

        if (pickOne === 'books') {
          book = prompt('You should curl up with a good book!');
        } else if (pickOne === 'cars') {
          roadTrip = prompt('You are going on a road trip through all 48 contiguous states!');
        } else if (pickOne === 'architecture') {
          empireState = prompt('You are going to enjoy a nice brunch on the rooftop terrace at the Empire State Building!');
        }
      } else if (water === 'n') {
        breath = prompt('How long can you hold your breath? (Enter # of seconds.)');
      }

      if (breath > 60) {
        freeDive = prompt('Your mission, should you choose to accept it, is to free dive in a cenote in Mexico in search of a treasure chest!');
      } else if (breath <= 60) {
        snorkel = prompt('You won a snorkeling trip at The Great Barrier Reef!');
      }
    }
  } else if (heights === 'y') {
    water = prompt('Are you afraid of the water? (Y/N)');
    water = water.toLowerCase();

    if (water === 'y') {
      pickOne = prompt('Pick one: Books, Cars, Architecture');
      pickOne = pickOne.toLowerCase();

      if (pickOne === 'books') {
        book = prompt('You should curl up with a good book!');
      } else if (pickOne === 'cars') {
        roadTrip = prompt('You are going on a road trip through all 48 contiguous states!');
      } else if (pickOne === 'architecture') {
        empireState = prompt('You are going to enjoy a nice lunch on the rooftop terrace at the Empire State Building!');
      }

    } else if (water === 'n') {
      breath = prompt('How long can you hold your breath? (Enter # of seconds.)');
    }

    if (breath > 60) {
      freeDive = prompt('Your mission, should you choose to accept it, is to free dive in a cenote in Mexico in search of a treasure chest!');
    } else if (breath <= 60) {
      snorkel = prompt('You won a snorkeling trip at The Great Barrier Reef!');
    }
  }

} else if (adventure === 'n') {
  outside = prompt('Do you like being outside? (Y/N)');
  outside = outside.toLowerCase();

  if (outside === 'y') {
    roadTrip = prompt('You are going on a road trip through all 48 contiguous states!');
  } else if (outside === 'n') {
    butItsSoNice = prompt('Really? But its so nice outside! (Y = YES REALLY! / N = Never mind, I can go outside.)');
    butItsSoNice = butItsSoNice.toLowerCase();

    if (butItsSoNice === 'y') {
      book = prompt('You should curl up with a good book!');
    } else if (butItsSoNice === 'n') {
      empireState = prompt('You are going to enjoy a nice lunch on the rooftop terrace at the Empire State Building!');
    }
  }

} else if (adventure === '?') {
  traveling = prompt('Do you like traveling? (Y / N)');
  traveling = traveling.toLowerCase();

  if (traveling === 'y') {
    onePlaceOrMany = prompt('Would you rather travel to one place or many places? (One / Many)');
    onePlaceOrMany = onePlaceOrMany.toLowerCase();

    if (onePlaceOrMany === 'one') {
      empireState = prompt('You are going to enjoy a nice lunch on the rooftop terrace at the Empire State Building!');
    } else if (onePlaceOrMany === 'many') {
      roadTrip = prompt('You are going on a road trip through all 48 contiguous states!');
    }

  } else if (traveling === 'n') {
    activeOrRestful = prompt('Do you like being active or restful? (A = Active / R = Restful)');
    activeOrRestful = activeOrRestful.toLowerCase();

    if (activeOrRestful === 'a') {
      snorkel = prompt('You won a snorkeling trip at The Great Barrier Reef!');
    } else if (activeOrRestful === 'r') {
      book = prompt('You should curl up with a good book!');
    }
  }
}

var end = prompt('Thanks for playing!');
