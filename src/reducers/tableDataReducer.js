export const tableReducer = (objs, action) => {
  const { fullName } = action;
  console.log(action.data.fullName);
  switch (action.type) {
    case "add": {
      return [
        ...objs,
        {
          fullName: action.fullName,
          area: action.area,
          email: action.email,
          phone: action.phone,
        },
      ];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
