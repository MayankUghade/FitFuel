//A get function to fetch calories
export const fetchCalories = async () => {
  try {
    const response = await fetch("/api/addCalories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error while fetching data");
    }

    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//A get function to fetch Breakfast
export const fetchBreakfast = async () => {
  try {
    const response = await fetch("/api/addBreakfast", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error while fetching data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

//A get function to fetch Lunch
export const fetchLunch = async () => {
  try {
    const response = await fetch("/api/addLunch", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error while fetching data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

//A get function to fetch Dinner
export const fetchDinner = async () => {
  try {
    const response = await fetch("/api/addDinner", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error while fetching data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

//A get function to fetch Calories
export const fetchSnacks = async () => {
  try {
    const response = await fetch("/api/addSnacks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error while fetching data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
