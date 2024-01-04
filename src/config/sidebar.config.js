import { DeleteOutline, InsertDriveFileOutlined, MailOutline, Photo, SendOutlined, StarOutline } from "@mui/icons-material";

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "inbox",
    title: "Inbox",
    icon: Photo,
  },
  {
    id: 2,
    name: "starred",
    title: "Starred",
    icon: StarOutline,
  },
  {
    id: 3,
    name: "send",
    title: "Send",
    icon: SendOutlined,
  },
  {
    id: 4,
    name: "drafts",
    title: "Drafts",
    icon: InsertDriveFileOutlined,
  },
  {
    id: 5,
    name: "bin",
    title: "Bin",
    icon: DeleteOutline,
  },
  {
    id: 6,
    name: "allmail",
    title: "All mail",
    icon: MailOutline,
  },
];
