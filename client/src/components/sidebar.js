import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    WorkOutline,
    Event,
  } from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div>
            <li>
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
            </li>
            <li>
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
            </li>
            <li>
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
            </li>
            <li>
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
            </li>
            <li>
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li>
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
            </li>
            <li>
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
            </li>
        </div>
    );
}