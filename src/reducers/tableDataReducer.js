export const tableReducer = (objs, action) => {
  const { fullName, areaSqr, email, phone } = action.data;

  switch (action.type) {
    case "add": {
      return [
        ...objs,
        {
          fullName: fullName,
          area: areaSqr,
          email: email,
          phone: phone,
        },
      ];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
