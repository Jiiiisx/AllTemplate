
import React from 'react';

const VisualJournal: React.FC = () => {
  return (
    <section className="py-48 bg-white" id="gallery">
      <div className="max-w-[1600px] mx-auto px-10">
        <div className="flex items-end justify-between mb-24">
          <h2 className="font-display text-7xl font-light tracking-tighter">Visual <span className="font-serif italic">Journal.</span></h2>
          <p className="max-w-xs text-espresso/40 text-[10px] tracking-[0.4em] uppercase font-bold text-right hidden lg:block">Atmosphere & Precision Captured.</p>
        </div>
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 md:col-span-8 image-reveal h-[600px] rounded-3xl">
            <img alt="People socializing" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIS8fp5uRFtzA7s8xHbfVPimyJmpSfNaC1Pajl8N_yXCtK5V0vhsVLapWdC_UnC93q9UvuZKQb3aCIjO69ZtwSuAcKnKo6cf-gM56lidv5-_VQMpAir6PFub8PaHFKPwA1Llk891iB8K1UVKMmg6ipelVuuipwzVAZ1tW9yz9k9OgIBv2A6Kyomg3-u57a-clB2saJg1zG9QhjvoHIuT6-SyDjZf12sjJ6xinsHB6t_6_08bcFLyEZfq3wjRdLqKezbxSJzaPb5KyH" />
          </div>
          <div className="col-span-12 md:col-span-4 image-reveal h-[600px] rounded-3xl mt-12 md:mt-24">
            <img alt="Latte art" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVarGgJ9JLp7TRBz7MQdL7L9s-M1eiA303isNyYYlqacg4eaKQrIiYOSTFYUTneUaVdsDRzKxUzDGraIao1lm61QRfE0o9__guYXPfbm3xKFV53FlNALqjrpzOA9JVql46b68bJXyFoJiV8q3Z0bpNSDENGIDMdzt-MO63yXY77idEcgVw50dFSol4XWtCuCtzJH4ypSiiIlQyLlK9pDB0819YVdDVUVs1NLusA-pgD-KQ_uYcl_KQsO-L_gcv86Zyg5mFtQy7efoK" />
          </div>
          <div className="col-span-12 md:col-span-5 image-reveal h-[500px] rounded-3xl md:-mt-12">
            <img alt="Coffee beans" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCegTcew92QhqPwYLOtSyjHI_vX5385CWK_s4RtyC-VC5q4JZgzQwWN99QuZw359SwQzrFW_RyucH6qbSYVPQsPqZBaSUtGAzjw9mFaAGQ0qS7I10AN0M751r-Iy1jUAXvHOABLQfHre4DZrJFXDh-__vyD1TnQ_eEnKgVY6P5UNpyuBCyy2POiNHIuiaYbwMOh-_WvfXm6UAwBmTyfFwn7GaiaR77yYw1G-EtbSbaPqYXgzUNcBgO4-wj1HwOvlo6wQyEidxVLzcj" />
          </div>
          <div className="col-span-12 md:col-span-7 image-reveal h-[500px] rounded-3xl">
            <img alt="Cafe exterior" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV5StGtJyLv_sKJih6SOLenqXSvFL71_ZNqG3eDAKoi_tZ8DkcgQiNkIfoiVE-VaKIrJeJb9dNpHzIgiR3aOPwMgf3ryUeLalZmgHCx2z7Byh1Z4JIxHltQ2CuWhw-7XYCi-QGnLWfKnT00BGRKBQ5rf0d3vNfj1vCXa1jqw0M-mIvWcbCRC3Yw2sKyRxgGP96T6m0z6LENYkh-tj1wAXDqOT4Q4pHfpsqeftU5qK8NRAgZQlA_Tst_QWJCKa3pHx8b2cF6hVtzE4g" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualJournal;
