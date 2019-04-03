function addAndMultiply(x, y, z) {
    return ((x + y) * z)
  }
  
  console.log(addAndMultiply(4,8,5)) // 60

  const addAndMultiply2 = (x, y, z) => ((x + y) * z);

  console.log('test this ' + addAndMultiply2(4, 8, 5))

  ////////////////////////////////////////////////////////

  function selfIntro(name, hobby, count) {
    return "My name is " + name + ". I practice " + hobby + " " + count + " times a day."
  }
  
  console.log(selfIntro('Shanqyeet', 'Kendama', '18')) // My name is Shanqyeet. I practice Kendama 18 times a day.

  const selfIntro2 = (name, hobby, count) => (`My name is ${name}. I practice ${hobby} ${count} times a day.`);

  console.log(selfIntro2('Shanqyeet', 'Kendama', '18'))