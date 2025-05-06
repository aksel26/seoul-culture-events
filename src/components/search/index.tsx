import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORY, MONTH } from "@/lib/const";
import useCategoryStore from "@/store/useStore";
import { IconSearch } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SearchModal = () => {
  const { setParams } = useCategoryStore();

  const submit = () => {
    setParams({ date: "sdsd" });
  };

  return (
    <Dialog>
      <DialogTrigger>
        {/* <Button size={"sm"} className="text-xs bg-primary800"> */}
        <div className="flex gap-x-1 text-xs bg-primary-700 px-4 py-2 rounded-sm text-primary-50 items-center">
          <IconSearch size={16} strokeWidth={1.5} />
          <p>행사 찾기</p>
        </div>
        {/* </Button> */}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left text-sm">
            원하는 문화행사를 검색하세요.
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-y-5 mt-3">
            <Input placeholder="행사명을 입력하세요." />
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="카테고리를 선택하세요." />
              </SelectTrigger>
              <SelectContent>
                {CATEGORY.map((item: { label: string; value: string }) => (
                  <SelectItem value={item.value}>{item.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="월을 선택하세요." />
              </SelectTrigger>
              <SelectContent>
                {MONTH.map((item: { label: string; value: string }) => (
                  <SelectItem value={item.value}>{item.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button size={"xs"} onClick={submit}>
              검색하기
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
