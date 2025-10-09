import { PiChatCircleTextLight, PiPhoneLight, PiCircleDashed,PiStarLight, PiVideoCameraLight } from "react-icons/pi";
import { BsArchive, BsPaperclip, BsEmojiSmile, BsSend, BsWhatsapp  } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaSearchSolid } from "react-icons/lia";
import { VscArrowLeft } from "react-icons/vsc";
import { BiSolidDownArrow } from "react-icons/bi";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { MdOutlinePeopleAlt } from "react-icons/md";
const MetaAIIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#009CFF" />
                <stop offset="100%" stopColor="#FF00B6" />
            </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="10" fill="none" stroke="url(#gradient)" strokeWidth="4" />
    </svg>
);

const ICONS = {
    Burger: RxHamburgerMenu,
    Phone: PiPhoneLight,
    Chat: PiChatCircleTextLight,
    Status: PiCircleDashed,
    MetaAI: MetaAIIcon,
    Star: PiStarLight,
    Archive: BsArchive,
    Settings: IoSettingsOutline,
    Loupe: LiaSearchSolid,
    Video: PiVideoCameraLight,
    Smile: BsEmojiSmile,
    Paperclip: BsPaperclip,
    Send: BsSend,
    Arrow: VscArrowLeft,
    ArrowDown: BiSolidDownArrow,
    Whatsapp: BsWhatsapp,
    Lock: HiOutlineLockClosed,
    People: MdOutlinePeopleAlt
}

export default ICONS