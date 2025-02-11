type Tag = "official" | "non-official" | "course-planning" | "food";

type Checked = DropdownMenuCheckboxItemProps["checked"];

interface TagDropdown {
  name: Tag,
  checked: Checked,
  setChecked: (checked: Checked) => void
}

interface Website {
  id: string
  name: string
  screenshot: string
  tags: Tag[]
  shortDescription: string
  link: string
  fullDescription: string
  creator: string
}
