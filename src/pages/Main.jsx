import Index from "../components/accordian/Index";
import BottomToTopScroll from "../components/bottom-to-top-scroll/BottomToTopScroll";
import TabsDemo from "../components/custom-tabs/TabsDemo";
import FeatureFlag from "../components/feature-flag/FeatureFlag";
import FeatureContext from "../components/feature-flag/context/Context";
import GihubFinder from "../components/gitHub-profile-finder/GihubFinder";
import ImageSlider from "../components/image-slider/ImageSlider";
import LightDarkMode from "../components/light-dark-mode/LightDarkMode";
import LoadMoreButton from "../components/load-more-button/LoadMoreButton";
import ModalDemo from "../components/popUp-modal/ModalDemo";
import QrCodeGenerator from "../components/qrCode-generator/QrCodeGenerator";
import GenerateRandomColor from "../components/random-color/GenerateRandomColor";
import ScrollIndicator from "../components/scroll-indicator/ScrollIndicator";
import ScrollSection from "../components/scroll-section/ScrollSection";
import SearchAutoComplete from "../components/search-auto-complete/SearchAutoComplete";
import StarRating from "../components/star-rating/StarRating";
import TicTacToe from "../components/tic-tac-toe/TicTacToe";
import TreeViewSideBar from "../components/tree-view/TreeViewSideBar";
import UseOutsideTest from "../components/use-outside-click/UseOutsideTest";
import UseWindowResizeTest from "../components/use-window-size/UseWindowResizeTest";
import CustomHook from "../components/useFetch-hook/CustomHook";

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

      {/* Tic Tac Toe Component */}
      <TicTacToe />

      {/* Scroll Bottom To Top Component */}
      <BottomToTopScroll />

      {/* Feature Flag Component */}
      <FeatureContext>
        <FeatureFlag />
      </FeatureContext>

      {/* Custom hook useFecth */}
      <CustomHook />

      {/* Custom hook use Out side click */}
      <UseOutsideTest />

      {/* Use Window Resize Hook */}
      <UseWindowResizeTest />

      {/* Scroll To Particular Section */}
      <ScrollSection />
    </>
  );
};

export default Main;
