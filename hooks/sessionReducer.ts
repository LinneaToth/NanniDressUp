import { useReducer } from "react";
import { ImageSourcePropType } from "react-native";

type sessionState = {
  wardrobeModalShown: boolean;
  characterModalShown: boolean;
  chosenImg: boolean;
  imgUrl: ImageSourcePropType;
};

const initialState: sessionState = {
  wardrobeModalShown: false,
  characterModalShown: false,
  chosenImg: false,
  imgUrl: require("../../assets/images/nanni_bg.png"),
};

const sessionReducer = (
  state: sessionState,
  action: { type: string; payload?: unknown },
) => {
  switch (action.type) {
    case "toggleWardrobeModal":
      return {
        ...state,
        wardrobeModalShown: !state.wardrobeModalShown,
      };
    case "toggleCharacterModal":
      return {
        ...state,
        characterModalShown: !state.characterModalShown,
      };
    case "resetImg":
      return {
        ...state,
        chosenImg: false,
      };
    case "setImg":
      if (action.payload) {
        return {
          ...state,
          chosenImg: true,
          imgUrl: action.payload as ImageSourcePropType,
        };
      } else return { ...state, chosenImg: false };
    default:
      return state;
  }
};

const useSessionReducer = () => {
  const [state, dispatch] = useReducer(sessionReducer, initialState);

  const toggleWardrobeModal = () => {
    dispatch({ type: "toggleWardrobeModal" });
  };

  const toggleCharacterModal = () => {
    dispatch({ type: "toggleCharacterModal" });
  };

  const resetImg = () => {
    dispatch({ type: "resetImg" });
  };

  const setImg = (img: ImageSourcePropType | null) => {
    dispatch({ type: "setImg", payload: img });
  };

  return {
    wardrobeModalShown: state.wardrobeModalShown,
    characterModalShown: state.characterModalShown,
    toggleCharacterModal,
    toggleWardrobeModal,
    chosenImg: state.chosenImg,
    resetImg,
    setImg,
    imgUrl: state.imgUrl,
  };
};

export { useSessionReducer };
