let name = "Nick";

const tinyize = function (name) {
  const myName = 'Tiny ' + name + '!';

  return myName;
};

name = tinyize('Rick');
console.log(name);

for (var i = 0; i < 5; i++) {
  let j = i;
  setTimeout(function () {
    console.log(j);
  });
}
