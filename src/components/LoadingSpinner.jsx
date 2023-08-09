import SpinIcon from "../assets/svgIcons/SpinIcon";

export default function LoadingSpinner(){
    return <>
      <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-1/4 left-1/2">
          <SpinIcon/>
          <span className="sr-only">Loading...</span>
      </div>
    </>
  }