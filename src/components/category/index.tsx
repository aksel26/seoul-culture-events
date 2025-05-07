import ToggleGroup from "../../component/ui/toggle/group";
import ToggleItem from "../../component/ui/toggle/item";
import useCategoryStore from "../../store/useStore";

const ParamsList = () => {
  const { setParams, params } = useCategoryStore();

  const toggleItem = (key: string) => {
    setParams({ [key]: "" });
  };

  return (
    <ToggleGroup>
      {Object.entries(params).map(([key, value]) => {
        if (value === "") return null;
        return <ToggleItem key={key} keyValue={key} value={value} label={value} onClick={toggleItem} />;
      })}
    </ToggleGroup>
  );
};

export default ParamsList;
