import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CATEGORY, MONTH } from "@/lib/const";
import useCategoryStore from "@/store/useStore";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchModal = () => {
  const { setParams } = useCategoryStore();

  const [values, setValues] = useState({
    codeName: "",
    title: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = () => {
    setParams(values);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex gap-x-1 text-xs bg-primary-700 px-4 py-2 rounded-sm text-primary-50 items-center">
          <Search size={16} strokeWidth={1.5} />
          <p>행사 찾기</p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left text-sm">다양한 문화행사를 찾아보세요.</DialogTitle>
          <DialogDescription className="flex flex-col gap-y-5 mt-3">
            <Input name="title" onChange={handleChange} value={values.title} placeholder="행사명을 입력하세요." />
            <Select onValueChange={handleSelectChange("codeName")} value={values.codeName}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="카테고리를 선택하세요." />
              </SelectTrigger>
              <SelectContent>
                {CATEGORY.map((item: { label: string; value: string }) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={handleSelectChange("date")} value={values.date}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="월을 선택하세요." />
              </SelectTrigger>
              <SelectContent>
                {MONTH.map((item: { label: string; value: string }) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
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
