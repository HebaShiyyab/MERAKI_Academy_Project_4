// app.js
// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
// import PreFooter from "./components/prefooter/index";

import React from "react";
import "./prefooter.css";
import ReadMoreReact from "read-more-react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const PreFooter = () => {
  return (
    <div className="prefooter">
      <Splide
        options={{
          rewind: true,
          width: 1210,
          gap: "1rem",
          type: "loop",
        }}
      >
        <SplideSlide>
          <div className="corona ticket">
            <h3>Corona Virus(COVID-19)</h3>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/800px-SARS-CoV-2_without_background.png" />

            <p>
              <ReadMoreReact
                text="Corona viruses are a group of related RNA viruses that cause diseases
          in mammals and birds. In humans and birds, they cause respiratory
          tract infections that can range from mild to lethal. Mild illnesses in
          humans include some cases of the common cold which is also caused by
          other viruses, predominantly rhinoviruses, while more lethal
          varieties can cause SARS, MERS, and COVID-19. In cows and pigs they
          cause diarrhea, while in mice they cause hepatitis and encephalomyelitis.
          The name was coined by June Almeida and David Tyrrell who first observed and studied human coronaviruses.
          The word was first used in print in 1968 by an informal group of virologists in 
          the journal Nature to designate the new family of viruses. The name refers to
           the characteristic appearance of virions (the infective form of the virus)
            by electron microscopy, which have a fringe of large,
             bulbous surface projections creating an image reminiscent
              of the solar corona or halo. This morphology is created by the viral spike peplomers, 
              which are proteins on the surface of the virus."
                min={80}
                ideal={100}
                max={200}
                readMoreText="read more"
              />
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="diabetes ticket">
            <h3>what is a healthy, balanced diet for diabetes?</h3>
            <img src="https://1.bp.blogspot.com/-PCyUAlI0EKo/XvrZcnLDlhI/AAAAAAAABHs/u-6kw6uxzNs87tZ-s-8yDGiu_vZzcIubQCK4BGAsYHg/s635/diabetes-plate-method-medium.png" />
            <p>
              <ReadMoreReact
                text="There is no specific diet for diabetes. But the foods you eat not only
          make a difference to how you manage your diabetes, but also to how
          well you feel and how much energy you have
          Eating from the main food groups 
            Fruit and veg
            Starchy foods, like bread, pasta and rice
            
            Protein foods, like beans, pulses, nuts, eggs, meat and fish
            
            Starchy foods, like bread, pasta and rice
          Dairy and alternatives
          Oils and spreads .
          If you have type 1 diabetes, your body does not make insulin.
           Your immune system attacks and destroys the cells in your pancreas 
           that make insulin. Type 1 diabetes is usually diagnosed in children
            and young adults, although it can appear at any age. People with 
            type 1 diabetes need to take insulin every day to stay alive."
                min={80}
                ideal={100}
                max={200}
                readMoreText="read more"
              />
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="Sport ticket">
            <h3>Sport for a Healthy Heart</h3>
            <img src="https://i.pinimg.com/originals/32/f6/f4/32f6f4aa396e6f0eb08fe876e9a90465.png" />
            <p>
              <ReadMoreReact
                text="  The heart is a muscular organ that pumps blood throughout the body,
          supplying oxygen and nutrients to the tissues while removing carbon
          dioxide and waste. When a person exercises, the heart rate increases
          due to the heart pumping harder to send more oxygen (via the blood) to
          the surrounding muscles at work. This results in increased blood flow,
          and also an increase in the blood volume returning to the heart. With
          regular exercise over time, the heart adapts to the increased blood
          flow and the left heart becomes enlarged. This allows the left heart
          to hold more blood and more blood is delivered with each heartbeat,
          even during rest. Hence, the resting heart rate of a sporty individual
          is lower as each beat delivers a larger volume of blood, and fewer
          beats are needed.
          What it does: Resistance training has a more specific effect on body 
          composition, Stewart says. For people who are carrying a lot of body
           fat (including a big belly, which is a risk factor for heart disease)"
                min={80}
                ideal={100}
                max={200}
                readMoreText="read more"
              />
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="vitamins ticket">
            <h3>What are vitamins?</h3>
            <img src="https://ostrovit.com/eng_pl_OstroVit-Vitamin-D3-K2-90-tabs-16704_1.png" />
            <p>
              <ReadMoreReact
                text="  Vitamins are organic substances present in minute amounts in natural foodstuffs. 
            Having too little of any particular vitamin may increase the risk of developing certain health issues.
             A vitamin is an organic compound, which means that it contains carbon.
            It is also an essential nutrient that the body may need to get from food.
            Vitamins are classified as either water-soluble or fat-soluble. In humans there are 13 vitamins: 4 fat-soluble (A, D, E, and K)
             and 9 water-soluble (8 B vitamins and vitamin C).
             Water-soluble vitamins dissolve easily in water and, in general, are readily excreted from the body, to the degree
             that urinary output is a strong predictor of vitamin consumption. Because they are not as readily stored, more consistent intake is important.
             Fat-soluble vitamins are absorbed through the intestinal tract with the help of lipids (fats). Vitamins A and D can accumulate in the body,
              which can result in dangerous hypervitaminosis. Fat-soluble vitamin deficiency due to malabsorption is of particular significance in cystic fibrosis."
                min={60}
                ideal={100}
                max={200}
                readMoreText="read more"
              />
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="pressure ticket">
            <h3>Blood pressure</h3>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Heart_systole.svg/330px-Heart_systole.svg.png" />
            <p>
              <ReadMoreReact
                text=" Blood pressure (BP) is the pressure of circulating blood against the walls of blood vessels.
             Most of this pressure results from the heart pumping blood through the circulatory system. When used 
             without qualification, the term 'blood pressure' refers to the pressure in the large arteries. Blood 
             pressure is usually expressed in terms of the systolic pressure (maximum pressure during one heartbeat) 
             over diastolic pressure (minimum pressure between two heartbeats) in the cardiac cycle. It is measured in 
             millimeters of mercury (mmHg) above the surrounding atmospheric pressure.
             Traditionally, blood pressure was measured non-invasively using auscultation with either an aneroid gauge, 
             or a mercury-tube sphygmomanometer. Auscultation is still generally considered to be the gold standard of
              accuracy for non-invasive blood pressure readings in clinic. However, semi-automated methods have become common,
            largely due to concerns about potential mercury toxicity, although cost, ease of use and applicability to ambulatory
            blood pressure or home blood pressure measurements have also influenced this trend.
            Early automated alternatives to mercury-tube sphygmomanometers were often seriously inaccurate, but modern devices 
            validated to international standards achieve an average difference between two standardized reading methods of 5 
            mm Hg or less, and a standard deviation of less than 8 mm Hg. Most of these semi-automated methods measure blood 
            pressure using oscillometry."
                min={80}
                ideal={100}
                max={200}
                readMoreText="read more"
              />
            </p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default PreFooter;
