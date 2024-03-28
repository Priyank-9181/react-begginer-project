import Index from "../components/accordian/Index";
import GenerateRandomColor from "../components/random-color/GenerateRandomColor";
import StarRating from "../components/star-rating/StarRating";
import ImageSlider from "../components/image-slider/ImageSlider";
import LoadMoreButton from "../components/load-more-button/LoadMoreButton";
import TreeViewSideBar from "../components/tree-view/TreeViewSideBar";
import QrCodeGenerator from "../components/qrCode-generator/QrCodeGenerator";
import LightDarkMode from "../components/light-dark-mode/LightDarkMode";
import ScrollIndicator from "../components/scroll-indicator/ScrollIndicator";
import TabsDemo from "../components/custom-tabs/TabsDemo";
import ModalDemo from "../components/popUp-modal/ModalDemo";
import GihubFinder from "../components/gitHub-profile-finder/GihubFinder";
import SearchAutoComplete from "../components/search-auto-complete/SearchAutoComplete";
import BottomToTopScroll from "../components/bottom-to-top-scroll/BottomToTopScroll";

const Main = () => {
  return (
    <>
      {/* Accordian Component */}
      <Index />

      {/* Generate Random Color Component */}
      <GenerateRandomColor />

      {/* Star Rating Component */}
      <StarRating noOfStar={5} />

      {/* Image Slider componet */}
      <ImageSlider url={`https://picsum.photos/v2/list`} limit={10} />

      {/* Load More Button component */}
      <LoadMoreButton />

      {/* Tree View Side Bar component / recursive problem solved */}
      <TreeViewSideBar />

      {/* Qr Code Generator component in this we can use other library */}
      <QrCodeGenerator />

      {/* Light Dark Mode Component */}
      <LightDarkMode />

      {/* Scroll Indicator Component */}
      <ScrollIndicator />

      {/* Tabs Component */}
      <TabsDemo />

      {/* Custom Popup Modal component */}
      <ModalDemo />

      {/* Git-hub Finder Component */}
      <GihubFinder />

      {/* Search auto complete Component */}
      <SearchAutoComplete />

      {/* Scroll Bottom To Top Component */}
      <BottomToTopScroll />
    </>
  );
};

export default Main;
