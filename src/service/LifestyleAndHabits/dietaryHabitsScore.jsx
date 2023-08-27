function calculateFactorScore(
  weight,
  description,
  value,
  isPercentage = false
) {
  const factorWeight = weight;
  let factorScore = factorWeight;

  if (isPercentage) {
    const valuePercentage = value * 100;
    if (valuePercentage >= 80) {
      factorScore += factorWeight;
    } else if (valuePercentage >= 60) {
      factorScore += factorWeight * 0.6;
    } else if (valuePercentage >= 40) {
      factorScore += factorWeight * 0.4;
    } else {
      factorScore += factorWeight * 0.2;
    }
  } else {
    if (value <= 1) {
      factorScore += factorWeight * 0.8;
    } else if (value <= 2) {
      factorScore += factorWeight * 0.6;
    } else if (value <= 3) {
      factorScore += factorWeight * 0.4;
    } else if (value <= 4) {
      factorScore += factorWeight * 0.2;
    }
  }

  return {
    factor: description,
    weight: factorWeight,
    isNormal: factorScore > factorWeight,
    description,
  };
}

export function getDietaryHabitsScore(userData) {
  if (typeof userData !== "object" || userData === null) {
    throw new Error("Input data must be an object.");
  }

  // Validate and extract data from the userData object
  const {
    dietType,
    mealPortions,
    junkFoodIntake,
    hydration,
    addedSugarsIntake,
  } = userData;

  // Validate that required properties exist in the userData object
  if (
    typeof dietType !== "string" ||
    typeof mealPortions !== "string" ||
    typeof junkFoodIntake !== "string" ||
    typeof hydration !== "number" ||
    typeof addedSugarsIntake !== "number"
  ) {
    throw new Error("Invalid input data. Missing or incorrect property types.");
  }

  // Define the factors and their corresponding weights
  const factors = {
    dietType: {
      weight: 0.3,
      descriptions: {
        balanced: "Following a balanced diet",
        highfiber: "Following a high-fiber diet",
        highprotein: "Following a high-protein diet",
        keto: "Following a keto diet",
        kidneyfriendly: "Following a kidney-friendly diet",
        kosher: "Following a kosher diet",
        lowcarb: "Following a low-carb diet",
        lowfat: "Following a low-fat diet",
        lowpotassium: "Following a low-potassium diet",
        lowsodium: "Following a low-sodium diet",
        nooiladded: "Following a no-oil-added diet",
        nosugar: "Following a no-sugar diet",
        paleo: "Following a paleo diet",
        pescatarian: "Following a pescatarian diet",
        porkfree: "Following a pork-free diet",
        redmeatfree: "Following a red-meat-free diet",
        sugarconscious: "Following a sugar-conscious diet",
        vegan: "Following a vegan diet",
        vegetarian: "Following a vegetarian diet",
      },
    },
    mealPortions: {
      weight: 0.2,
      descriptions: {
        regular: "Eating regular-sized meal portions",
        big: "Eating big meal portions",
        small: "Eating small meal portions",
      },
    },
    junkFoodIntake: {
      weight: -0.2,
      descriptions: {
        regular: "Regularly consuming junk food",
        often: "Frequently consuming junk food",
        sometimes: "Occasionally consuming junk food",
        occasionally: "Rarely consuming junk food",
        rarely: "Rarely or never consuming junk food",
      },
    },
    hydration: {
      weight: 0.1,
      descriptions: {
        0.8: "Maintaining good hydration levels",
        0.6: "Maintaining average hydration levels",
        0.4: "Maintaining below average hydration levels",
        0.2: "Maintaining poor hydration levels",
      },
      isPercentage: true,
    },
    addedSugarsIntake: {
      weight: -0.15,
      descriptions: {
        1: "Very low added sugars intake",
        2: "Low added sugars intake",
        3: "Moderate added sugars intake",
        4: "High added sugars intake",
        5: "Very high added sugars intake",
      },
    },
  };

  // Calculate the DietaryHabitsScore based on the defined factors and their weights
  let dietaryHabitsScore = 0;
  const influencingFactors = [];

  // Calculate scores and collect influencing factors for each factor
  for (const factorName in factors) {
    if (factors.hasOwnProperty(factorName)) {
      const { weight, descriptions, isPercentage } = factors[factorName];
      if (descriptions.hasOwnProperty(userData[factorName])) {
        const factorScore = calculateFactorScore(
          weight,
          descriptions[userData[factorName]],
          userData[factorName],
          isPercentage
        );
        dietaryHabitsScore += factorScore.weight;
        influencingFactors.push(factorScore);
      }
    }
  }

  // Calculate overall score out of 100
  dietaryHabitsScore = Math.round((dietaryHabitsScore + 0.3) * 100);

  // Return the result object with the overall score and influencing factors
  return {
    score: dietaryHabitsScore,
    influencingFactors,
  };
}
