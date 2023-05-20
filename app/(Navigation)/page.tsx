import LoanSlider from "@components/Sliders";
import VerticalSpacer from "@components/VerticalSpacer";

export default function HomePage() {


  return (
    <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Enjoy
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> A new way of doing banking!</span>
    </h1>
    <p className='desc text-center'>
      Lendotopia is a demo site providing a fake (simulated) loan application!
    </p>
          <VerticalSpacer height={8} /> 
    <LoanSlider />
  </section>
);
}
