var i = 0;
var p = 0;
var speed = 30; /* The speed/duration of the effect in milliseconds */
var descSpeed = 5; /* The speed/duration of the effect in milliseconds */

function a() {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function clearAbilityTitleAndDesc() {
  document.getElementById("abilityTitle").innerHTML = "";
  document.getElementById("abilityDesc").innerHTML = "";
  window.p = 0;
  window.i = 0;
}

function abilityOne() {
  var abilityName = 'scars of stars'

  if (window.i < abilityName.length) {
    document.getElementById("abilityTitle").innerHTML += abilityName.charAt(window.i);
    i++;
    setTimeout(abilityOne, speed);
  } else {
    window.i = 0;
  }
}

function abilityOneDesc() {
  var abilityDesc = 'Use LMB to summon a beam of stars up ahead that will summon a cosmic star wherever it lands. This cosmic star creates an extremely powerful explosion and leaves behind a cosmic cloud, suffocating, slowing, and blinding enemies caught within it.';
  if (window.p < abilityDesc.length) {
    document.getElementById("abilityDesc").innerHTML += abilityDesc.charAt(window.p);
    p++;
    setTimeout(abilityOneDesc, descSpeed);
  } else {
    window.p = 0;
  }
}


function abilityTwo() {
  var abilityName = 'invisible string'

  if (i < abilityName.length) {
    document.getElementById("abilityTitle").innerHTML += abilityName.charAt(window.i);
    i++;
    setTimeout(abilityTwo, speed);
  } else {
    window.i = 0;
  }
}
function abilityTwoDesc() {
  var abilityDesc = 'Use LMB to launch an invisble projectile up ahead. Upon landing, will create a short radius. All enemies within this radius will be tied down and unable to move, and will begin glowing, revealing their position. If not removed on time, will damage the enemy.';
  if (window.p < abilityDesc.length) {
    document.getElementById("abilityDesc").innerHTML += abilityDesc.charAt(window.p);
    p++;
    setTimeout(abilityTwoDesc, descSpeed);
  } else {
    window.p = 0;
  }
}

function abilityThree() {
  var abilityName = 'ash from your fire'

  if (i < abilityName.length) {
    document.getElementById("abilityTitle").innerHTML += abilityName.charAt(window.i);
    i++;
    setTimeout(abilityThree, speed);
  } else {
    window.i=0;
  }
}
function abilityThreeDesc() {
  var abilityDesc = 'USE to pull pieces of the surrounding Earth and crumple them into a burning ball. In a 5 second timeframe, the ball will explode and set everything nearby on fire. Use LMB to throw the ball.';
  if (window.p < abilityDesc.length) {
    document.getElementById("abilityDesc").innerHTML += abilityDesc.charAt(window.p);
    p++;
    setTimeout(abilityThreeDesc, descSpeed);
  } else {
    window.p = 0;
  }
}

function abilityFour() {
  var abilityName = 'ricocheting tears'

  if (window.i < abilityName.length) {
    document.getElementById("abilityTitle").innerHTML += abilityName.charAt(window.i);
    i++;
    setTimeout(abilityFour, speed);
  } else {
    window.i = 0;
  }
}
function abilityFourDesc() {
  var abilityDesc = 'USE to summon a bubble around you that will heal and deflect any ability and projectile.';
  if (window.p < abilityDesc.length) {
    document.getElementById("abilityDesc").innerHTML += abilityDesc.charAt(window.p);
    p++;
    setTimeout(abilityFourDesc, descSpeed);
  } else {
    window.p = 0;
  }
}

function abilityFive() {
  var abilityName = 'exiling force'

  if (i < abilityName.length) {
    document.getElementById("abilityTitle").innerHTML += abilityName.charAt(window.i);
    i++;
    setTimeout(abilityFive, speed);
  } else {
    window.i = 0;
  }
}
function abilityFiveDesc() {
  var abilityDesc = 'USE to push all enemies within your line of sight backwards and slowing them in the process.';
  if (window.p < abilityDesc.length) {
    document.getElementById("abilityDesc").innerHTML += abilityDesc.charAt(window.p);
    p++;
    setTimeout(abilityFiveDesc, descSpeed);
  } else {
    window.p = 0;
  }
}


function abilitySix() {
  var abilityName = 'waves of hurt'

  if (i < abilityName.length) {
    document.getElementById("abilityTitle").innerHTML += abilityName.charAt(window.i);
    i++;
    setTimeout(abilitySix, speed);
  } else {
    window.i=0;
  }
}
function abilitySixDesc() {
  var abilityDesc = 'USE to be instantly healed.';
  if (window.p < abilityDesc.length) {
    document.getElementById("abilityDesc").innerHTML += abilityDesc.charAt(window.p);
    p++;
    setTimeout(abilitySixDesc, descSpeed);
  } else {
    window.p = 0;
  }
}

function abilitySeven() {
  var abilityName = 'invocation of the roots of the seven mystic trees'

  if (i < abilityName.length) {
    document.getElementById("abilityTitle").innerHTML += abilityName.charAt(window.i);
    i++;
    setTimeout(abilitySeven, speed);
  } else {
    window.i=0;
  }
}
function abilitySevenDesc() {
  var abilityDesc = 'USE to equip a projectile. USE LMB to throw. Where this projectile lands, will create a LARGE AOE where all enemies caught within it will be tied down by roots, taking damage in the process. It also reveals their exact location. If an enemy is killed, health will automatically be regenerated.';
  if (window.p < abilityDesc.length) {
    document.getElementById("abilityDesc").innerHTML += abilityDesc.charAt(window.p);
    p++;
    setTimeout(abilitySevenDesc, descSpeed);
  } else {
    window.p = 0;
  }
}


function scarsOfStars() {
  clearAbilityTitleAndDesc();
  abilityOne();
  abilityOneDesc();

  let ref = document.getElementById("reference");
  ref.innerHTML = '';
  ref.innerHTML = '"You drew stars around my scars, but now I\'m bleeding"<br><br>based off of cardigan:<br><iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4R2kfaDFhslZEMJqAFNpdd?utm_source=generator" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
}
function invisibleString() {
  clearAbilityTitleAndDesc();
  abilityTwo();
  abilityTwoDesc();
  let ref = document.getElementById("reference");
  ref.innerHTML = '';
  ref.innerHTML = '"All along there was some invisible string, tying you to me..."<br><br>based off of invisible string:<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6VsvKPJ4xjVNKpI8VVZ3SV?utm_source=generator" width="250" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
}
function peace() {
  clearAbilityTitleAndDesc();
  abilityThree();
  abilityThreeDesc();
  let ref = document.getElementById("reference");
  ref.innerHTML = '';
  ref.innerHTML = '"Your sleight of hand, my barren land, I am ash from your fire..."<br><br>based off of hoax:<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6MWoRt97mnSTXZhu3ggi9C?utm_source=generator" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
}
function ricochetingTears() {
  clearAbilityTitleAndDesc();
  abilityFour();
  abilityFourDesc();
  let ref = document.getElementById("reference");
  ref.innerHTML = '';
  ref.innerHTML = '"You\'re cursing my name, wishing I stayed, look at how my tears ricochet..."<br><br>based off of my tears ricochet:<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1MgV7FIyNxIG7WzMRJV5HC?utm_source=generator" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
}
function exilingForce() {
  clearAbilityTitleAndDesc();
  abilityFive();
  abilityFiveDesc();
  let ref = document.getElementById("reference");
  ref.innerHTML = '';
  ref.innerHTML = '"You were my crown, now I\'m in exile seeing you out..."<br><br>based off of invisible string:<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4pvb0WLRcMtbPGmtejJJ6y?utm_source=generator" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
}
function epiphany() {
  clearAbilityTitleAndDesc();
  abilitySix();
  abilitySixDesc();
  let ref = document.getElementById("reference");
  ref.innerHTML = '';
  ref.innerHTML = '"What should be over burrowed under my skin in heartstopping waves of hurt..."<br><br>based off of the lakes:<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0eFQWVz0qIxDOvhLpZ40P7?utm_source=generator" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
}
function invocation() {
  clearAbilityTitleAndDesc();
  abilitySeven();
  abilitySevenDesc();
  let ref = document.getElementById("reference");
  ref.innerHTML = '';
  ref.innerHTML = '"Please picture me in the trees, I hit my peak at seven / Feet in the swing, over the creek, with Pennsylvania under me..."<br><br>based off of seven: <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6KJqZcs9XDgVck7Lg9QOTC?utm_source=generator" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
}
