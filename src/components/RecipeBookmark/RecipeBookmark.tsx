import { FaBookmark } from "react-icons/fa";
import { useGlobal } from "../../hooks/GlobalContext";
import { FaRegBookmark } from "react-icons/fa6";

export default function RecipeBookmark({
  id,
  style,
  size,
}: {
  id?: string;
  style?: React.CSSProperties;
  size?: string | number;
}) {
  if (!id) {
    return;
  }
  const { savedRecipes, setSavedRecipes, setRecipeSaverActive, setActiveRecipeID } = useGlobal();
  const isSaved = Object.keys(savedRecipes).map((key) => {
    return key;
  }).includes(id);
  const onClick = () => {
    setRecipeSaverActive(true);
    setActiveRecipeID(id);
    // const newList = {...savedRecipes};
    // if (isSaved) {
    //    newList.splice(newList.indexOf(id), 1);
    // } else {
    //   newList.push(id);
    // }
    // setSavedRecipes(newList);
  }
  let Comp = isSaved ? FaBookmark : FaRegBookmark;
  return <Comp size={size} onClick={onClick} style={{ ...style }} />;
}
