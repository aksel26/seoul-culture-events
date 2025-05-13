import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CATEGORY } from "@/lib/const";
import useCategoryStore from "@/store/useStore";
import { CalendarIcon, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { ko } from "date-fns/locale";

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
  const [date, setDate] = useState<Date>();

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
          <DialogTitle className="text-left text-2xl">Discover</DialogTitle>
          <DialogDescription className="text-xs leading-5">
            원하시는 컨텐츠를 찾아보세요. <br />
            제목, 카테고리, 날짜로 검색이 가능합니다.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-y-6 my-3">
          <Input name="title" onChange={handleChange} value={values.title} placeholder="찾고싶은 문화공연명을 입력해 주세요." />
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

          <Popover>
            <PopoverTrigger asChild>
              <div>
                <Button variant={"outline"} className={cn("w-full justify-start text-left text-xs font-normal", !date && "text-muted-foreground")}>
                  <CalendarIcon />
                  {date ? format(date, "yyyy-MM-dd", { locale: ko }) : <span>날짜를 선택해 주세요.</span>}
                </Button>
                <p className="text-xs mt-1 text-gray-400">선택한 날짜 이후의 모든 데이터가 조회됩니다.</p>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        <DialogFooter>
          <Button size={"xs"} onClick={submit}>
            검색하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
