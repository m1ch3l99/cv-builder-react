export const initialState = {
  personData: {
    aboutMe: {},
    education: [],
    workExperience: [],
    skills: [],
    languages: [],
    socials: {},
  },
  toggle: false,
  savedInfo: false,
};

// the reducer is responsible of the actions
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ABOUT_ME":
      return {
        ...state,
        personData: {
          ...state.personData,
          aboutMe: action.payload,
        },
      };

    case "SET_EDUCATION":
      return {
        ...state,
        personData: {
          ...state.personData,
          education: [...state.personData.education, action.payload],
        },
      };

    case "SET_WORK_EXPERIENCE":
      return {
        ...state,
        personData: {
          ...state.personData,
          workExperience: [...state.personData.workExperience, action.payload],
        },
      };

    case "SET_SKILLS":
      return {
        ...state,
        personData: {
          ...state.personData,
          skills: action.payload,
        },
      };

    case "SET_LANGUAGES":
      return {
        ...state,
        personData: {
          ...state.personData,
          languages: action.payload,
        },
      };

    case "SET_SOCIALS":
      return {
        ...state,
        personData: {
          ...state.personData,
          socials: action.payload,
        },
      };

    case "TOGGLE":
      return {
        ...state,
        toggle: !state.toggle,
      };

    case "SAVE__INFO":
      return {
        ...state,
        savedInfo: true,
      };

    case "RESET":
      return {
        ...state,
        savedInfo: false,
      };
    // =======================================

    default:
      return state;
  }
};

export default reducer;
