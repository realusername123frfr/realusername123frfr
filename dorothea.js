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
  var abilityName = 'golden fireball'

  if (window.i < abilityName.length) {
    document.getElementById("abilityTitle").innerHTML += abilityName.charAt(window.i);
    i++;
    setTimeout(abilityOne, speed);
  } else {
    window.i = 0;
  }
}

function abilityOneDesc() {
  var abilityDesc = 'Use LMB to launch a golden fireball up ahead, that will create a powerful, painful explosion where it lands. Enemies caught within the explosion will continue to take damage for 3 seconds, or until extinguished by other abilities.';
  if (window.p < abilityDesc.length) {
    document.getElementById("abilityDesc").innerHTML += abilityDesc.charAt(window.p);
    p++;
    setTimeout(abilityOneDesc, descSpeed);
  } else {
    window.p = 0;
  }
}


function abilityTwo() {
  var abilityName = 'growing ivy'

  if (i < abilityName.length) {
    document.getElementById("abilityTitle").innerHTML += abilityName.charAt(window.i);
    i++;
    setTimeout(abilityTwo, speed);
  } else {
    window.i = 0;
  }
}
function abilityTwoDesc() {
  var abilityDesc = 'Use LMB to INSTANTLY trap enemies within a small radius in poison ivy that will trap and poison them until removed.';
  if (window.p < abilityDesc.length) {
    document.getElementById("abilityDesc").innerHTML += abilityDesc.charAt(window.p);
    p++;
    setTimeout(abilityTwoDesc, descSpeed);
  } else {
    window.p = 0;
  }
}

function abilityThree() {
  var abilityName = 'Este\'s book of spells'

  if (i < abilityName.length) {
    document.getElementById("abilityTitle").innerHTML += abilityName.charAt(window.i);
    i++;
    setTimeout(abilityThree, speed);
  } else {
    window.i=0;
  }
}
function abilityThreeDesc() {
  var abilityDesc = 'Use LMB to pull a fallen soul from the ground and haunt the nearest enemy. When HAUNTED, the enemy will be trapped and blinded. They will also lose 25% of their health.';
  if (window.p < abilityDesc.length) {
    document.getElementById("abilityDesc").innerHTML += abilityDesc.charAt(window.p);
    p++;
    setTimeout(abilityThreeDesc, descSpeed);
  } else {
    window.p = 0;
  }
}

function abilityFour() {
  var abilityName = 'gold rush'

  if (window.i < abilityName.length) {
    document.getElementById("abilityTitle").innerHTML += abilityName.charAt(window.i);
    i++;
    setTimeout(abilityFour, speed);
  } else {
    window.i = 0;
  }
}
function abilityFourDesc() {
  var abilityDesc = 'USE to enter a FRENZY. While active, gain increased movement speed and strength. If enemy takes damage from you or ally, reveal their position temporarily.';
  if (window.p < abilityDesc.length) {
    document.getElementById("abilityDesc").innerHTML += abilityDesc.charAt(window.p);
    p++;
    setTimeout(abilityFourDesc, descSpeed);
  } else {
    window.p = 0;
  }
}

function abilityFive() {
  var abilityName = 'lasso'

  if (i < abilityName.length) {
    document.getElementById("abilityTitle").innerHTML += abilityName.charAt(window.i);
    i++;
    setTimeout(abilityFive, speed);
  } else {
    window.i = 0;
  }
}
function abilityFiveDesc() {
  var abilityDesc = 'USE to LAUNCH a projectile, creating a radius upon landing. The nearest enemy caught within this will be reeled in towards you.';
  if (window.p < abilityDesc.length) {
    document.getElementById("abilityDesc").innerHTML += abilityDesc.charAt(window.p);
    p++;
    setTimeout(abilityFiveDesc, descSpeed);
  } else {
    window.p = 0;
  }
}


function abilitySix() {
  var abilityName = 'gardens of babylon'

  if (i < abilityName.length) {
    document.getElementById("abilityTitle").innerHTML += abilityName.charAt(window.i);
    i++;
    setTimeout(abilitySix, speed);
  } else {
    window.i=0;
  }
}
function abilitySixDesc() {
  var abilityDesc = 'USE to instantly summon multiple clones of you that will disperse across many directions, distracting enemies, while turning invisible yourself.';
  if (window.p < abilityDesc.length) {
    document.getElementById("abilityDesc").innerHTML += abilityDesc.charAt(window.p);
    p++;
    setTimeout(abilitySixDesc, descSpeed);
  } else {
    window.p = 0;
  }
}

function abilitySeven() {
  var abilityName = 'mystical willow tree'

  if (i < abilityName.length) {
    document.getElementById("abilityTitle").innerHTML += abilityName.charAt(window.i);
    i++;
    setTimeout(abilitySeven, speed);
  } else {
    window.i=0;
  }
}
function abilitySevenDesc() {
  var abilityDesc = 'USE to erect a willow tree at your position. After a few seconds, will begin harnessing the health of all nearby enemies, and dispersing it to all nearby allies as healing.';
  if (window.p < abilityDesc.length) {
    document.getElementById("abilityDesc").innerHTML += abilityDesc.charAt(window.p);
    p++;
    setTimeout(abilitySevenDesc, descSpeed);
  } else {
    window.p = 0;
  }
}


function goldFireball() {
  clearAbilityTitleAndDesc();
  abilityOne();
  abilityOneDesc();

  let ref = document.getElementById("reference");
  ref.innerHTML = '';
  ref.innerHTML = '"Everybody wants you, but I don\'t like a gold rush..."<br><br>based off of gold rush:<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3Dby3p1m6IOZn2gIIqECgK?utm_source=generator" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
}
function ivyGrowth() {
  clearAbilityTitleAndDesc();
  abilityTwo();
  abilityTwoDesc();
  let ref = document.getElementById("reference");
  ref.innerHTML = '';
  ref.innerHTML = '"My house of stone, your ivy grows, and now I\'m covered in you..."<br><br>based off of ivy:<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/19CSr8rwW05VJL2F91KFNK?utm_source=generator" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
}
function bookOfSpells() {
  clearAbilityTitleAndDesc();
  abilityThree();
  abilityThreeDesc();
  let ref = document.getElementById("reference");   
  ref.innerHTML = '';
  ref.innerHTML = '"Este wasn\'t there / Tuesday night at Olive Garden, at her job, or anywhere..."<br><br>based off of no body, no crime:<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3RaT22zZsxVYxxKR7TAaYF?utm_source=generator" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
}
function goldRush() {
  clearAbilityTitleAndDesc();
  abilityFour();
  abilityFourDesc();
  let ref = document.getElementById("reference");
  ref.innerHTML = '';
  ref.innerHTML = '"Everybody wants you, but I don\'t like a gold rush..."<br><br>based off of gold rush:<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3Dby3p1m6IOZn2gIIqECgK?utm_source=generator" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
}
function lasso() {
  clearAbilityTitleAndDesc();
  abilityFive();
  abilityFiveDesc();
  let ref = document.getElementById("reference");
  ref.innerHTML = '';
  ref.innerHTML = '"You\'re a cowboy like me, perched in the dark..."<br><br>based off of cowboy like me:<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1XjHRolIXL2M1EEOUsGGR4?utm_source=generator" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
}
function gardensOfBabylon() {
  clearAbilityTitleAndDesc();
  abilitySix();
  abilitySixDesc();
  let ref = document.getElementById("reference");
  ref.innerHTML = '';
  ref.innerHTML = '"Now you hang from my lips like the Gardens of Babylon..."<br><br>*the gardens of babylon were once a wonder of the world, but have never been proven to have existed<br><br>based off of cowboy like me:<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1XjHRolIXL2M1EEOUsGGR4?utm_source=generator" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
}
function willowPower() {
  clearAbilityTitleAndDesc();
  abilitySeven();
  abilitySevenDesc();
  let ref = document.getElementById("reference");
  ref.innerHTML = '';
  ref.innerHTML = '"Life was a willow and it bent right to your wind / But I come back stronger than a 90\'s trend..."<br><br>based off of willow: <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0lx2cLdOt3piJbcaXIV74f?utm_source=generator" width="70%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
}
