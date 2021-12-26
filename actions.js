// random number from 0 to index.
// the default index value is 4 .
const randomIndex = (index) => Math.floor(Math.random() * (index ? index + 1 : 5));

// calc calories
const calcCalories = (user) => {
  let result;
  let totalCalories;
  let motobolic = user.motobolic.value == 'slow' ? 7 : user.motobolic.value == 'fast' ? -10 : 0;
  motobolic = user.days.value > 3 ? motobolic - 3 : motobolic;
  motobolic = user.anabolic.value == 'yes' ? motobolic - 3 : motobolic;

  if (user.sex.value == 'male') {
    if (user.age.value <= 30) {
      if (user.goal.value == 'losing') {
        result = (motobolic / 100) * 1500;
        totalCalories = 1500 - result;
      }
      if (user.goal.value == 'gain') {
        result = (motobolic / 100) * 3500;
        totalCalories = 3500 - result;
      }
      if (user.goal.value == 'gain-musels') {
        result = (motobolic / 100) * 3000;
        totalCalories = 3000 - result;
      }
      if (user.goal.value == 'keep') {
        result = (motobolic / 100) * 2500;
        totalCalories = 2500 - result;
      }
    }
    if (user.age.value > 30 && user.age.value <= 40) {
      if (user.goal.value == 'losing') {
        result = (motobolic / 100) * 1400;
        totalCalories = 1400 - result;
      }
      if (user.goal.value == 'gain') {
        result = (motobolic / 100) * 330;
        totalCalories = 330 - result;
      }
      if (user.goal.value == 'gain-musels') {
        result = (motobolic / 100) * 2900;
        totalCalories = 2900 - result;
      }
      if (user.goal.value == 'keep') {
        result = (motobolic / 100) * 2400;
        totalCalories = 2400 - result;
      }
    }
    if (user.age.value > 40) {
      if (user.goal.value == 'losing') {
        result = (motobolic / 100) * 1300;
        totalCalories = 1300 - result;
      }
      if (user.goal.value == 'gain') {
        result = (motobolic / 100) * 2900;
        totalCalories = 2900 - result;
      }
      if (user.goal.value == 'gain-musels') {
        result = (motobolic / 100) * 2600;
        totalCalories = 2600 - result;
      }
      if (user.goal.value == 'keep') {
        result = (motobolic / 100) * 2300;
        totalCalories = 2300 - result;
      }
    }
  }
  if (user.sex.value == 'female') {
    if (user.age.value <= 30) {
      if (user.goal.value == 'losing') {
        result = (motobolic / 100) * 1400;
        totalCalories = 1400 - result;
      }
      if (user.goal.value == 'gain') {
        result = (motobolic / 100) * 2800;
        totalCalories = 2800 - result;
      }
      if (user.goal.value == 'gain-musels') {
        result = (motobolic / 100) * 2700;
        totalCalories = 2700 - result;
      }
      if (user.goal.value == 'keep') {
        result = (motobolic / 100) * 2400;
        totalCalories = 2400 - result;
      }
    }
    if (user.age.value > 30 && user.age.value <= 40) {
      if (user.goal.value == 'losing') {
        result = (motobolic / 100) * 1300;
        totalCalories = 1300 - result;
      }
      if (user.goal.value == 'gain') {
        result = (motobolic / 100) * 2700;
        totalCalories = 2700 - result;
      }
      if (user.goal.value == 'gain-musels') {
        result = (motobolic / 100) * 2600;
        totalCalories = 2600 - result;
      }
      if (user.goal.value == 'keep') {
        result = (motobolic / 100) * 2300;
        totalCalories = 2300 - result;
      }
    }
    if (user.age.value > 40) {
      if (user.goal.value == 'losing') {
        result = (motobolic / 100) * 1200;
        totalCalories = 1200 - result;
      }
      if (user.goal.value == 'gain') {
        result = (motobolic / 100) * 2600;
        totalCalories = 2600 - result;
      }
      if (user.goal.value == 'gain-musels') {
        result = (motobolic / 100) * 2500;
        totalCalories = 2500 - result;
      }
      if (user.goal.value == 'keep') {
        result = (motobolic / 100) * 2200;
        totalCalories = 2200 - result;
      }
    }
  }
  return totalCalories;
};

const calcFoodByG = (user) => {
  const food = {};
  food.total_calories = calcCalories(user);

  if (user.goal.value == 'losing') {
    food.protin = ((45 / 100) * food.total_calories) / 4;
    food.carb = ((30 / 100) * food.total_calories) / 4;
    food.fat = ((25 / 100) * food.total_calories) / 9;
  }
  if (user.goal.value == 'gain') {
    food.protin = ((30 / 100) * food.total_calories) / 4;
    food.carb = ((40 / 100) * food.total_calories) / 4;
    food.fat = ((30 / 100) * food.total_calories) / 9;
  }
  if (user.goal.value == 'gain-musels') {
    food.protin = ((50 / 100) * food.total_calories) / 4;
    food.carb = ((30 / 100) * food.total_calories) / 4;
    food.fat = ((20 / 100) * food.total_calories) / 9;
  }
  if (user.goal.value == 'keep') {
    food.protin = ((25 / 100) * food.total_calories) / 4;
    food.carb = ((50 / 100) * food.total_calories) / 4;
    food.fat = ((25 / 100) * food.total_calories) / 9;
  }
  return food;
};

const calcMeals = (user) => {
  const meals = {};
  const food = calcFoodByG(user);

  if (user.meals.value == 3) {
    if (user.goal.value == 'gain') {
      meals.meal_num_1 = {
        protin: Math.ceil(food.protin / 3),
        carb: Math.ceil(food.carb / 3),
        fat: Math.ceil(food.fat / 3),
      };
      meals.meal_num_2 = meals.meal_num_1;
      meals.meal_num_3 = meals.meal_num_1;
    } else {
      meals.meal_num_1 = {
        protin: Math.ceil((40 / 100) * food.protin),
        carb: Math.ceil((40 / 100) * food.carb),
        fat: Math.ceil((40 / 100) * food.fat),
      };
      meals.meal_num_2 = {
        protin: Math.ceil((35 / 100) * food.protin),
        carb: Math.ceil((35 / 100) * food.carb),
        fat: Math.ceil((35 / 100) * food.fat),
      };
      meals.meal_num_3 = {
        protin: Math.ceil((25 / 100) * food.protin),
        carb: Math.ceil((25 / 100) * food.carb),
        fat: Math.ceil((25 / 100) * food.fat),
      };
    }
  } else if (user.meals.value == 4) {
    if (user.goal.value == 'losing') {
      meals.meal_num_1 = {
        protin: Math.ceil((30 / 100) * food.protin),
        carb: Math.ceil((0 / 100) * food.carb),
        fat: Math.ceil((30 / 100) * food.fat),
      };
      meals.meal_num_2 = {
        protin: Math.ceil((25 / 100) * food.protin),
        carb: Math.ceil(food.carb / 2),
        fat: Math.ceil((25 / 100) * food.fat),
      };
      meals.meal_num_3 = meals.meal_num_2;
      meals.meal_num_4 = {
        protin: Math.ceil((20 / 100) * food.protin),
        carb: Math.ceil((0 / 100) * food.carb),
        fat: Math.ceil((20 / 100) * food.fat),
      };
    } else {
      meals.meal_num_1 = {
        protin: Math.ceil((30 / 100) * food.protin),
        carb: Math.ceil((30 / 100) * food.carb),
        fat: Math.ceil((30 / 100) * food.fat),
      };
      meals.meal_num_2 = {
        protin: Math.ceil((25 / 100) * food.protin),
        carb: Math.ceil((25 / 100) * food.carb),
        fat: Math.ceil((25 / 100) * food.fat),
      };
      meals.meal_num_3 = meals.meal_num_2;
      meals.meal_num_4 = {
        protin: Math.ceil((20 / 100) * food.protin),
        carb: Math.ceil((20 / 100) * food.carb),
        fat: Math.ceil((20 / 100) * food.fat),
      };
    }
  } else if (user.meals.value == 5) {
    if (user.goal.value == 'losing') {
      meals.meal_num_1 = {
        protin: Math.ceil((25 / 100) * food.protin),
        carb: Math.ceil((0 / 100) * food.carb),
        fat: Math.ceil((25 / 100) * food.fat),
      };
      meals.meal_num_2 = {
        protin: Math.ceil((20 / 100) * food.protin),
        carb: Math.ceil(food.carb / 3),
        fat: Math.ceil((20 / 100) * food.fat),
      };
      meals.meal_num_3 = meals.meal_num_2;
      meals.meal_num_4 = meals.meal_num_2;
      meals.meal_num_5 = {
        protin: Math.ceil((15 / 100) * food.protin),
        carb: Math.ceil((0 / 100) * food.carb),
        fat: Math.ceil((15 / 100) * food.fat),
      };
    } else {
      meals.meal_num_1 = {
        protin: Math.ceil((25 / 100) * food.protin),
        carb: Math.ceil((25 / 100) * food.carb),
        fat: Math.ceil((25 / 100) * food.fat),
      };
      meals.meal_num_2 = {
        protin: Math.ceil((20 / 100) * food.protin),
        carb: Math.ceil((20 / 100) * food.carb),
        fat: Math.ceil((20 / 100) * food.fat),
      };
      meals.meal_num_3 = meals.meal_num_2;
      meals.meal_num_4 = meals.meal_num_2;
      meals.meal_num_5 = {
        protin: Math.ceil((15 / 100) * food.protin),
        carb: Math.ceil((15 / 100) * food.carb),
        fat: Math.ceil((15 / 100) * food.fat),
      };
    }
  } else {
    meals.meal_num_1 = {
      protin: Math.ceil(food.protin / 2),
      carb: Math.ceil(food.carb / 2),
      fat: Math.ceil(food.fat / 2),
    };
    meals.meal_num_2 = meals.meal_num_1;
  }

  const results = { meals, food };
  return results;
};

const program = (user, programs) => {
  let completeProgram = [];
  let fullProgram = {};
  let program = {};
  if (user.goal.value == 'losing' || user.sex.value == 'female' || user.days.value == 1) {
    program.sets = user.time.value == 30 || user.time.value == 60 ? '15 x 3' : '15 x 4';
  } else {
    program.sets = user.time.value == 30 || user.time.value == 60 ? '15 12 10' : '15 12 10 8';
  }
  console.log(user.days.value, user.time.value);
  if (user.days.value == 1) {
    if (user.time.value == 30 || user.time.value == 45) {
      program.back = [programs.back.mid[randomIndex(programs.back.mid.length - 1)]];
      program.chest = [programs.chest.mid[randomIndex(programs.chest.mid.length - 1)]];
      program.shoulder = [programs.shoulder.side[randomIndex(programs.shoulder.side.length - 1)]];
      program.legs = [programs.legs.qouad[randomIndex(programs.legs.qouad.length - 1)]];
      program.biceps = [programs.arms.biceps[randomIndex(programs.arms.biceps.length - 1)]];
      program.triceps = [programs.arms.triceps[randomIndex(programs.arms.triceps.length - 1)]];
    } else {
      program.back = [
        programs.back.mid[randomIndex(programs.back.mid.length - 1)],
        programs.back.low[randomIndex(programs.back.low.length - 1)],
      ];
      program.chest = [programs.chest.mid[randomIndex(programs.chest.mid.length - 1)]];
      program.shoulder = [programs.shoulder.side[randomIndex(programs.shoulder.side.length - 1)]];
      program.legs = [
        programs.legs.qouad[randomIndex(programs.legs.qouad.length - 1)],
        programs.legs.front[randomIndex(programs.legs.front.length - 1)],
      ];

      [(program.biceps = programs.arms.biceps[randomIndex(programs.arms.biceps.length - 1)])];
      [(program.triceps = programs.arms.triceps[randomIndex(programs.arms.triceps.length - 1)])];
      if (user.time.value > 75) {
        program.cardio = [user.time.value - 75];
      }
    }
    completeProgram.push(program);
  } else if (user.days.value == 2) {
    const day1 = [
      ['chest', 'back', 'shoulder'],
      ['chest', 'back', 'biceps'],
      ['back', 'shoulder', 'biceps'],
    ];
    const day2 = [
      ['legs', 'biceps', 'triceps'],
      ['legs', 'shoulder', 'triceps'],
      ['legs', 'chest', 'triceps'],
    ];
    console.log(day1, day2);
    const randomProgramIndex = randomIndex(2);
    const programDay1 = day1[randomProgramIndex];
    const programDay2 = day2[randomProgramIndex];

    fullProgram.back = [
      programs.back.mid[randomIndex(programs.back.mid.length - 1)],
      programs.back.low[randomIndex(programs.back.low.length - 1)],
    ];
    fullProgram.chest = [
      programs.chest.mid[randomIndex(programs.chest.mid.length - 1)],
      programs.chest.iso[randomIndex(programs.chest.iso.length - 1)],
    ];
    fullProgram.shoulder = [
      programs.shoulder.side[randomIndex(programs.shoulder.side.length - 1)],
      programs.shoulder.front[randomIndex(programs.shoulder.front.length - 1)],
    ];
    fullProgram.legs = [
      programs.legs.qouad[randomIndex(programs.legs.qouad.length - 1)],
      programs.legs.front[0],
    ];
    let biceps = randomIndex(programs.arms.biceps.length - 1);
    fullProgram.biceps = [
      programs.arms.biceps[biceps],
      programs.arms.biceps[biceps == programs.arms.biceps.length - 1 ? biceps - 1 : biceps + 1],
    ];
    let triceps = randomIndex(programs.arms.triceps.length - 1);
    fullProgram.triceps = [
      programs.arms.triceps[triceps],
      programs.arms.triceps[
        triceps == programs.arms.triceps.length - 1 ? triceps - 1 : triceps + 1
      ],
    ];
    if (user.time.value > 45) {
      fullProgram.back.push(programs.back.up[randomIndex(programs.back.up.length - 1)]);
      fullProgram.legs.push(programs.legs.ham[randomIndex(programs.legs.ham.length - 1)]);
    }
    if (user.time.value > 75) {
      program.cardio = [user.time.value - 75];
    }
    programDay1.forEach((item) => {
      program[item] = fullProgram[item];
      console.log(program);
    });
    completeProgram.push(program);
    // console.log(program);
    // console.log(completeProgram);
    program = { sets: program.sets };
    programDay2.forEach((item) => {
      program[item] = fullProgram[item];
    });
    completeProgram.push(program);
  } else if (user.days.value == 3) {
    const day1 = [
      ['chest', 'triceps'],
      ['chest', 'biceps'],
      ['back', 'shoulder'],
      ['chest', 'shoulder'],
    ];
    const day2 = [
      ['back', 'biceps'],
      ['back', 'triceps'],
      ['chest', 'triceps'],
      ['back', 'biceps'],
    ];
    const day3 = [
      ['legs', 'shoulder'],
      ['legs', 'shoulder'],
      ['legs', 'biceps'],
      ['legs', 'triceps'],
    ];

    const randomProgramIndex = randomIndex(3);
    const programDay1 = day1[randomProgramIndex];
    const programDay2 = day2[randomProgramIndex];
    const programDay3 = day3[randomProgramIndex];

    let back = randomIndex(programs.back.mid.length - 1);
    fullProgram.back = [
      programs.back.mid[back],
      programs.back.low[randomIndex(programs.back.low.length - 1)],
      programs.back.up[randomIndex(programs.back.up.length - 1)],
    ];
    let chest = randomIndex(programs.chest.iso.length - 1);
    fullProgram.chest = [
      programs.chest.up[randomIndex(programs.chest.up.length - 1)],
      programs.chest.mid[randomIndex(programs.chest.mid.length - 1)],
      programs.chest.iso[chest],
    ];
    fullProgram.shoulder = [
      programs.shoulder.side[randomIndex(programs.shoulder.side.length - 1)],
      programs.shoulder.front[randomIndex(programs.shoulder.front.length - 1)],
      programs.shoulder.back[randomIndex(programs.shoulder.back.length - 1)],
    ];

    fullProgram.legs = [
      programs.legs.front[0],
      programs.legs.qouad[randomIndex(programs.legs.qouad.length - 1)],
      programs.legs.ham[randomIndex(programs.legs.ham.length - 1)],
    ];
    let biceps = [];
    while (biceps.length < 3) {
      let random = randomIndex(programs.arms.biceps.length - 1);
      if (!biceps.includes(random)) {
        biceps.push(random);
      }
    }

    fullProgram.biceps = [
      programs.arms.biceps[biceps[0]],
      programs.arms.biceps[biceps[1]],
      programs.arms.biceps[biceps[2]],
    ];
    let triceps = [];
    while (triceps.length < 3) {
      let random = randomIndex(programs.arms.triceps.length - 1);
      if (!triceps.includes(random)) {
        triceps.push(random);
      }
    }
    fullProgram.triceps = [
      programs.arms.triceps[triceps[0]],
      programs.arms.triceps[triceps[1]],
      programs.arms.triceps[triceps[2]],
    ];
    if (user.time.value > 45) {
      fullProgram.back.push(
        programs.back.mid[back == programs.back.mid.length - 1 ? back - 1 : back + 1],
      );
      fullProgram.legs.push(programs.legs.calf[randomIndex(programs.legs.calf.length - 1)]);
      fullProgram.chest.push(
        programs.chest.iso[chest == programs.chest.iso.length - 1 ? chest - 1 : chest + 1],
      );
    }
    if (user.time.value > 75) {
      program.cardio = [user.time.value - 75];
    }
    programDay1.forEach((item) => {
      program[item] = fullProgram[item];
    });
    completeProgram.push(program);
    program = { sets: program.sets };
    programDay2.forEach((item) => {
      program[item] = fullProgram[item];
    });
    completeProgram.push(program);
    program = { sets: program.sets };
    programDay3.forEach((item) => {
      program[item] = fullProgram[item];
    });
    completeProgram.push(program);
  } else if (user.days.value == 4) {
    const day1 = [['back', 'biceps'], ['back', 'biceps'], ['back']];
    const day2 = [['chest', 'triceps'], ['chest', 'triceps'], ['chest']];
    const day3 = [['legs'], ['legs'], ['legs', 'shoulder']];
    const day4 = [['shoulder'], ['shoulder', 'biceps', 'triceps'], ['biceps', 'triceps']];
    const randomProgramIndex = randomIndex(2);
    const programDay1 = day1[randomProgramIndex];
    const programDay2 = day2[randomProgramIndex];
    const programDay3 = day3[randomProgramIndex];
    const programDay4 = day4[randomProgramIndex];

    let back = [];
    while (back.length < 3) {
      let random = randomIndex(programs.back.mid.length - 1);
      if (!back.includes(random)) {
        back.push(random);
      }
    }
    fullProgram.back = [
      programs.back.mid[back[0]],
      programs.back.low[randomIndex(programs.back.low.length - 1)],
      programs.back.up[randomIndex(programs.back.up.length - 1)],
    ];
    let chestUp = [];
    while (chestUp.length < 2) {
      let random = randomIndex(programs.chest.up.length - 1);
      if (!chestUp.includes(random)) {
        chestUp.push(random);
      }
    }
    let chestIso = [];
    while (chestIso.length < 2) {
      let random = randomIndex(programs.chest.iso.length - 1);
      if (!chestIso.includes(random)) {
        chestIso.push(random);
      }
    }
    fullProgram.chest = [
      programs.chest.up[chestUp[0]],
      programs.chest.mid[randomIndex(programs.chest.mid.length - 1)],
      programs.chest.iso[chestIso[0]],
    ];
    fullProgram.shoulder = [
      programs.shoulder.side[randomIndex(programs.shoulder.side.length - 1)],
      programs.shoulder.front[randomIndex(programs.shoulder.front.length - 1)],
      programs.shoulder.back[randomIndex(programs.shoulder.back.length - 1)],
    ];
    let legs = [];
    while (legs.length < 2) {
      let random = randomIndex(programs.legs.qouad.length - 1);
      if (!legs.includes(random)) {
        legs.push(random);
      }
    }
    console.log(legs);
    fullProgram.legs = [
      programs.legs.front[0],
      programs.legs.qouad[legs[0]],
      programs.legs.ham[randomIndex(programs.legs.ham.length - 1)],
    ];
    let biceps = [];
    while (biceps.length < 3) {
      let random = randomIndex(programs.arms.biceps.length - 1);
      if (!biceps.includes(random)) {
        biceps.push(random);
      }
    }

    fullProgram.biceps = [
      programs.arms.biceps[biceps[0]],
      programs.arms.biceps[biceps[1]],
      // programs.arms.biceps[biceps[2]],
    ];
    let triceps = [];
    while (triceps.length < 3) {
      let random = randomIndex(programs.arms.triceps.length - 1);
      if (!triceps.includes(random)) {
        triceps.push(random);
      }
    }
    fullProgram.triceps = [
      programs.arms.triceps[triceps[0]],
      programs.arms.triceps[triceps[1]],
      // programs.arms.triceps[triceps[2]],
    ];
    if (programDay1.length == 1) {
      fullProgram.back.push(programs.back.mid[back[1]]);
    }
    if (programDay2.length == 1) {
      fullProgram.chest.push(programs.chest.iso[chestUp[1]]);
    }
    if (programDay3.length == 1) {
      fullProgram.legs.push(programs.legs.qouad[legs[1]]);
    }
    if (programDay4.length == 1) {
      fullProgram.shoulder.push(
        programs.shoulder.neck[randomIndex(programs.shoulder.neck.length - 1)],
      );
    }
    if (programDay4.length == 2) {
      fullProgram.biceps.push(programs.arms.biceps[2]);
      fullProgram.triceps.push(programs.arms.triceps[2]);
    }
    if (user.time.value > 45) {
      fullProgram.back.push(programs.back.mid[back[2]]);
      fullProgram.legs.push(programs.legs.calf[randomIndex(programs.legs.calf.length - 1)]);
      fullProgram.chest.push(programs.chest.up[chestUp[1]]);
    }
    if (user.time.value > 75) {
      program.cardio = [user.time.value - 75];
    }
    programDay1.forEach((item) => {
      program[item] = fullProgram[item];
    });
    completeProgram.push(program);
    program = { sets: program.sets };
    programDay2.forEach((item) => {
      program[item] = fullProgram[item];
    });
    completeProgram.push(program);
    program = { sets: program.sets };
    programDay3.forEach((item) => {
      program[item] = fullProgram[item];
    });
    completeProgram.push(program);
    program = { sets: program.sets };
    programDay4.forEach((item) => {
      program[item] = fullProgram[item];
    });
    completeProgram.push(program);
  } else {
    const day1 = [['back', 'biceps'], ['back']];
    const day2 = [['chest', 'triceps'], ['chest']];
    const day3 = [['legs'], ['legs']];
    const day4 = [['shoulder'], ['shoulder']];
    const day5 = [['biceps', 'triceps'], ['biceps', 'triceps'], ,];
    const randomProgramIndex = randomIndex(1);
    console.log(randomProgramIndex);
    const programDay1 = day1[randomProgramIndex];
    const programDay2 = day2[randomProgramIndex];
    const programDay3 = day3[randomProgramIndex];
    const programDay4 = day4[randomProgramIndex];
    const programDay5 = day5[randomProgramIndex];

    let back = [];
    while (back.length < 3) {
      let random = randomIndex(programs.back.mid.length - 1);
      if (!back.includes(random)) {
        back.push(random);
      }
    }
    fullProgram.back = [
      programs.back.mid[back[0]],
      programs.back.low[randomIndex(programs.back.low.length - 1)],
      programs.back.up[randomIndex(programs.back.up.length - 1)],
    ];
    let chestUp = [];
    while (chestUp.length < 2) {
      let random = randomIndex(programs.chest.up.length - 1);
      if (!chestUp.includes(random)) {
        chestUp.push(random);
      }
    }
    let chestIso = [];
    while (chestIso.length < 2) {
      let random = randomIndex(programs.chest.iso.length - 1);
      if (!chestIso.includes(random)) {
        chestIso.push(random);
      }
    }
    fullProgram.chest = [
      programs.chest.up[chestUp[0]],
      programs.chest.mid[randomIndex(programs.chest.mid.length - 1)],
      programs.chest.iso[chestIso[0]],
    ];
    fullProgram.shoulder = [
      programs.shoulder.side[randomIndex(programs.shoulder.side.length - 1)],
      programs.shoulder.front[randomIndex(programs.shoulder.front.length - 1)],
      programs.shoulder.back[randomIndex(programs.shoulder.back.length - 1)],
    ];
    let legs = [];
    while (legs.length < 2) {
      let random = randomIndex(programs.legs.qouad.length - 1);
      if (!legs.includes(random)) {
        legs.push(random);
      }
    }
    console.log(legs);
    fullProgram.legs = [
      programs.legs.front[0],
      programs.legs.qouad[legs[0]],
      programs.legs.ham[randomIndex(programs.legs.ham.length - 1)],
    ];
    let biceps = [];
    while (biceps.length < 4) {
      let random = randomIndex(programs.arms.biceps.length - 1);
      if (!biceps.includes(random)) {
        biceps.push(random);
      }
    }

    fullProgram.biceps = [
      programs.arms.biceps[biceps[0]],
      programs.arms.biceps[biceps[1]],
      // programs.arms.biceps[biceps[2]],
    ];
    let triceps = [];
    while (triceps.length < 4) {
      let random = randomIndex(programs.arms.triceps.length - 1);
      if (!triceps.includes(random)) {
        triceps.push(random);
      }
    }
    fullProgram.triceps = [
      programs.arms.triceps[triceps[0]],
      programs.arms.triceps[triceps[1]],
      // programs.arms.triceps[triceps[2]],
    ];
    if (programDay1.length == 1) {
      fullProgram.back.push(programs.back.mid[back[1]]);
    }
    if (programDay2.length == 1) {
      fullProgram.chest.push(programs.chest.iso[chestUp[1]]);
    }
    if (programDay3.length == 1) {
      fullProgram.legs.push(programs.legs.qouad[legs[1]]);
    }
    if (programDay4.length == 1) {
      fullProgram.shoulder.push(
        programs.shoulder.neck[randomIndex(programs.shoulder.neck.length - 1)],
      );
    }
    if (programDay5.length == 2) {
      fullProgram.biceps.push(programs.arms.biceps[2]);
      fullProgram.triceps.push(programs.arms.triceps[2]);
    }
    if (user.time.value > 45) {
      fullProgram.back.push(programs.back.mid[back[2]]);
      fullProgram.legs.push(programs.legs.calf[randomIndex(programs.legs.calf.length - 1)]);
      fullProgram.chest.push(programs.chest.up[chestUp[1]]);
      fullProgram.biceps.push(programs.arms.biceps[3]);
      fullProgram.triceps.push(programs.arms.triceps[3]);
    }
    if (user.time.value > 75) {
      program.cardio = [user.time.value - 75];
    }
    programDay1.forEach((item) => {
      if (item == 'biceps') {
        program[item] = fullProgram[item].slice(0, 2);
      } else {
        program[item] = fullProgram[item];
      }
    });
    completeProgram.push(program);
    program = { sets: program.sets };
    programDay2.forEach((item) => {
      if (item == 'triceps') {
        program[item] = fullProgram[item].slice(0, 2);
      } else {
        program[item] = fullProgram[item];
      }
    });
    completeProgram.push(program);
    program = { sets: program.sets };
    programDay3.forEach((item) => {
      program[item] = fullProgram[item];
    });
    completeProgram.push(program);
    program = { sets: program.sets };
    programDay4.forEach((item) => {
      program[item] = fullProgram[item];
    });
    completeProgram.push(program);
    program = { sets: program.sets };
    programDay5.forEach((item) => {
      program[item] = fullProgram[item];
    });
    completeProgram.push(program);
    if (user.days.value == 6) {
      program = { sets: program.sets };
      program.cardio = [60];
      completeProgram.push(program);
    }
  }
  return completeProgram;
};
