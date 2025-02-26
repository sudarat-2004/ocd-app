import Link from "next/link";
import React from "react";

export default function Portfolio1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              การดำเนินการเปลี่ยนแปลงองค์กรภาครัฐ
              {/* <small>Subheading</small> */}
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Portfolio 1</li>
            </ol>
          </div>
          <div className="project-inner">
            {/* Project One */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงองค์กรภาครัฐในยุคดิจิทัล</h3>
                <p>
                  <Link
                    href="https://www.salika.co/2024/05/25/cloud-using-for-digital-goverment/ "
                    target="_blank"
                    rel="noopenrt noreferrer"
                  >
                    ก้าวที่ท้าทายของการเปลี่ยนผ่านสู่ รัฐบาลดิจิทัล
                    กับการใช้คลาวด์เชื่อมโยงข้อมูลภาครัฐแบบไร้รอยต่อ
                  </Link>
                </p>
                <p>
                  ต้องยอมรับว่าความท้าทายของภาครัฐในยุคนี้ คือ
                  จะทำอย่างไรให้ประชาชนติดต่อและรับบริการจากภาครัฐได้โดยสะดวกในโลกยุคดิจิทัล
                  คำตอบก็คือ การปรับเปลี่ยนไปสู่ภาครัฐที่ทันสมัย
                  ใช้เทคโนโลยีดิจิทัลในการบริหารงานและให้บริการแก่ประชาชน
                  ซึ่งก็คือการก้าวไปสู่การเป็น รัฐบาลดิจิทัล (Digital
                  Government) นั่นเอง
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-1-66.pdf"
                  target="_blank"
                  rel="noopenrt noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Two */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงให้เกิดประสิทธิผล</h3>
                <p>
                  <Link
                    href="https://www.prosci.com/blog/effective-change-management-begins-with-a-compelling-why"
                    target="_blank"
                    rel="noopenrt noreferrer"
                  >
                    การร่างเหตุผล ที่น่าสนใจ
                    ในการเปลี่ยนแปลงของคุณนั้นมีความสำคัญมากกว่าที่เคย
                    ในฐานะผู้ปฏิบัติงานด้านการเปลี่ยนแปลงพร้อมเหตุผลที่น่าสนใจนั้นสามารถสร้างแรงบันดาลใจให้ผู้คนดำเนินการได้{" "}
                  </Link>
                </p>
                <p>
                  การจัดการการเปลี่ยนแปลงผู้คนมักจะอธิบายได้ดี
                  ว่าโครงการหรือความคิดริเริ่ม
                  นั้นเป็นอย่างไรสิ่งเหล่านี้คือลักษณะของการเปลี่ยนแปลง
                  รวมถึงพฤติกรรมที่เกี่ยวข้องกับการดำเนินการและการปรับให้การเปลี่ยนแปลงเหมาะสมที่สุด
                  ตัวอย่างเช่น การทำงานจากระยะไกล
                  ผู้คนมักจะเข้าใจว่าการทำงานจากที่บ้านหมายถึงอะไรเมื่อคุณอธิบายทุกสิ่งที่เกี่ยวข้องและวิธีดำเนินการอย่างมีประสิทธิภาพ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-67-71.pdf"
                  target="_blank"
                  rel="noopenrt noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Three */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-03.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การดำเนินการเปลี่ยนแปลง
                  เพื่อเปลี่ยนผ่านไปสู่ความเป็นองค์กรดิจิทัล .
                </h3>
                <p>
                  <Link
                    href="https://www.craftskills.org/digital-transformation"
                    target="_blank"
                    rel="noopenrt noreferrer"
                  >
                    การดำเนินการเปลี่ยนแปลง
                    เพื่อเปลี่ยนผ่านไปสู่ความเป็นองค์กรดิจิทัล องค์กรเสมือนจริง
                    และองค์กรอัจฉริยะ{" "}
                  </Link>
                </p>
                <p>
                  การเปลี่ยนผ่านสู่ระบบดิจิทัลเป็นกระบวนการที่องค์กรนำไปใช้เพื่อรวมเทคโนโลยีดิจิทัลในทุกด้านของธุรกิจ
                  กระบวนการนี้จะเปลี่ยนแปลงวิธีการที่องค์กรส่งมอบคุณค่าให้กับลูกค้าโดยพื้นฐาน
                  บริษัทต่าง ๆ
                  นำเทคโนโลยีดิจิทัลที่เป็นนวัตกรรมมาใช้เพื่อสร้างการเปลี่ยนแปลงทางวัฒนธรรมและการดำเนินงานที่ปรับให้เข้ากับความต้องการของลูกค้าที่เปลี่ยนแปลงไปได้ดีมากยิ่งขึ้น
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-72-75.pdf"
                  target="_blank"
                  rel="noopenrt noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://www.apm.org.uk/blog/successful-change-6-key-factors/"
                    target="_blank"
                    rel="noopenrt noreferrer"
                  >
                    การทำความเข้าใจปัจจัยแห่งความสำเร็จจึงมีความสำคัญอย่างยิ่ง
                    เพื่อปรับปรุงผลลัพธ์และเพิ่มผลตอบแทนจากการลงทุนให้เหมาะสมที่สุด
                  </Link>
                </p>
                <p>
                  องค์กรเกือบทั้งหมดต้องเผชิญกับการเปลี่ยนแปลงในระดับ
                  ความซับซ้อน และขนาดที่แตกต่างกัน
                  โดยมีการลงทุนหลายพันล้านปอนด์ทุกปี
                  ต้นทุนของความล้มเหลวอาจส่งผลกระทบร้ายแรงต่อองค์กรและบุคลากร
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-76-78.pdf"
                  target="_blank"
                  rel="noopenrt noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Five */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างความพร้อมในการเปลี่ยนแปลง</h3>

                <p>
                  <Link
                    href="https://www.pmi.org/learning/library/change-readiness-11126"
                    target="_blank"
                    rel="noopenrt noreferrer"
                  >
                    การเปลี่ยนแปลงมักจำเป็นสำหรับการเติบโตและความสามารถในการทำผลกำไร
                    กระบวนการจัดการการเปลี่ยนแปลงอย่างสม่ำเสมอต่อเนื่องจะช่วยลดผลกระทบด้านลบของการเปลี่ยนแปลงต่อองค์กรและกับพนักงานของคุณได้
                  </Link>
                </p>
                <p>
                  หลายองค์กรทั้งหมดต้องประสบกับการเปลี่ยนแปลงอย่างต่อเนื่อง
                  ไม่ว่าจะเกิดจากการนำเทคโนโลยีใหม่ไปใช้งาน การอัปเดตกระบวนการ
                  การเริ่มความยินยอมเเละให้ความร่วมมือ การปรับโครงสร้างองค์กร
                  หรือการปรับปรุงการบริการลูกค้า
                  สิ่งนี้เหล่านี้ไม่จำเป็นต้องเป็นเเง่ลบเสมอไป
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-79-82.pdf"
                  target="_blank"
                  rel="noopenrt noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project six*/}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ตัวอย่างแบบสำรวจความพร้อมในการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://surveysparrow.com/blog/change-management-survey-questions/"
                    target="_blank"
                    rel="noopenrt noreferrer"
                  >
                    การเปลี่ยนแปลงองค์กรเป็นสิ่งที่หลีกเลี่ยงไม่ได้
                    องค์กรทุกแห่งต้องประสบกับการเปลี่ยนแปลงนี้ในบางจุด
                    สิ่งสำคัญคือต้องนำพาองค์กรโดยรวมผ่านการเปลี่ยนแปลงนี้ไปให้ไ้โดยไม่เกิดการหยุดชะงักมากนัก{" "}
                  </Link>
                </p>
                <p>
                  แบบสอบถามนี้ออกแบบมาเพื่อวัดว่าพนักงานปรับตัวเข้ากับกระบวนการและระบบใหม่ได้ดีเพียงใด
                  โดยสามารถให้ข้อมูลเชิงลึกเกี่ยวกับประสิทธิผลของการจัดการการเปลี่ยนแปลงและค้นหาพื้นที่ที่ต้องการการสนับสนุนเพิ่มเติม
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-83-85.pdf"
                  target="_blank"
                  rel="noopenrt noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />

          {/* Project seven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การต่อต้านการเปลี่ยนแปลง (Resistance to Change)</h3>
                <p>
                  <Link
                    href="humanica.com/th/resistance-to-change/"
                    target="_blank"
                    rel="noopenrt noreferrer"
                  >
                    การต่อต้านการเปลี่ยนแปลง คือ
                    การที่องค์กรจำเป็นต้องปรับเปลี่ยนโครงสร้างภายใน
                    เพื่อรองรับการเติบโต{" "}
                  </Link>
                </p>
                <p>
                  การต่อต้านการเปลี่ยนแปลง
                  นับว่าเป็นปัญหาสำคัญที่หลายองค์กรมักมองข้าม
                  เพราะด้วยความคิดที่ว่า หากมีนโยบายการเปลี่ยนแปลงใดๆ ขึ้นมา
                  เหล่าพนักงานย่อมต้องเชื่อฟังและปฏิบัติตาม แต่เชื่อไหมว่า
                  มีบางส่วนเท่านั้นที่ยอมรับได้
                  และแน่นอนว่าก็มีบางส่วนที่ยอมรับไม่ได้เช่นกัน
                  นำมาสู่การต่อต้านการเปลี่ยนแปลงในที่สุด
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-86-89.pdf"
                  target="_blank"
                  rel="noopenrt noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project eigeht */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การเอาชนะการต่อต้านการเปลี่ยนแปลง (Overcoming Resistance to
                  Change)
                </h3>
                <p>
                  <Link
                    href="https://www.humanica.com/th/resistance-to-change/"
                    target="_blank"
                    rel="noopenrt noreferrer"
                  >
                    องค์กรจะประกาศการเปลี่ยนแปลง Humanica
                    แนะนำให้เตรียมวิธีรับมือกับการต่อต้านที่คาดว่าจะตามมาเสียก่อน
                    โดยเฉพาะองค์กรขนาดใหญ่ เพราะอาจทำให้ธุรกิจหยุดชะงักได้
                    ซึ่งวิธีรับมือที่นำมาใช้และเห็นผลมากที่สุด
                    ประกอบไปด้วยสี่วิธีดังต่อไปนี้{" "}
                  </Link>
                </p>
                <p>
                  การจัดการการเปลี่ยนแปลง
                  โซลูชันที่คิดค้นจากทีมงานมากด้วยประสบการณ์เรื่องการบริหารการเปลี่ยนแปลงภายในองค์กร
                  ช่วยลดการต่อต้าน และเพิ่มโอกาสของผลลัพธ์ให้ประสบความสำเร็จ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-90-92.pdf"
                  target="_blank"
                  rel="noopenrt noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project nine */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง (Creating a Vision to
                  Change)
                </h3>
                <p>
                  <Link
                    href="https://www.maciverprojectservices.co.uk/2010/kotters-leading-change-step-3-creating-a-vision/"
                    target="_blank"
                    rel="noopenrt noreferrer"
                  >
                    การพัฒนาวิสัยทัศน์และกลยุทธ์จะสร้างรากฐานสำหรับการเปลี่ยนแปลง{" "}
                  </Link>
                </p>
                <p>
                  โดยลงทุนทั้งเวลาและความพยายามในการตกลงทิศทางและผลลัพธ์ที่คาดหวังจากการเปลี่ยนแปลงผ่านกระบวนการถกเถียงและการยอมรับ
                  ถือเป็นภาพอนาคตและอธิบายเหตุผลว่าทำไมการสร้างอนาคตนั้นจึงมีความสำคัญ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-93-98.pdf"
                  target="_blank"
                  rel="noopenrt noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project ten */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ขั้นตอนการกำหนดวิสัยทัศน์ (Steps of Creating a Vision)</h3>
                <p>
                  <Link
                    href="https://getlucidity.com/strategy-resources/5-steps-to-creating-your-company-vision-statement/"
                    target="_blank"
                    rel="noopenrt noreferrer"
                  >
                    ส่วนหนึ่งของการกำหนดวิสัยทัศน์ของคุณอย่างชัดเจนคือการกำหนดว่า
                    "วิสัยทัศน์" หมายถึงอะไรก่อน
                  </Link>
                </p>
                <p>
                  วิสัยทัศน์ของบริษัทเป็นเป้าหมายระยะยาวที่สร้างแรงบันดาลใจซึ่งกำหนดทิศทางของธุรกิจ
                  คำชี้แจงวิสัยทัศน์ที่ร่างขึ้นอย่างดีสามารถเป็นเครื่องมือที่มีประสิทธิภาพ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-99-102.pdf"
                  target="_blank"
                  rel="noopenrt noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />

          {/* Project eleven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การค้นหาผู้มีส่วนได้ส่วนเสีย (Identifying Key Stakeholders)
                </h3>
                <p>
                  <Link
                    href="https://getlucidity.com/strategy-resources/5-steps-to-creating-your-company-vision-statement/"
                    target="_blank"
                    rel="noopenrt noreferrer"
                  >
                    ผู้มีส่วนได้ส่วนเสียหมายถึงบุคคล กลุ่ม หรือองค์กรใดๆ
                    ที่อาจได้รับผลกระทบ มีอิทธิพล
                    หรือมีความสนใจในโครงการหรืองานของคุณ
                  </Link>
                </p>
                <p>
                  ผู้มีส่วนได้ส่วนเสียที่สำคัญหมายถึงผู้มีส่วนได้ส่วนเสียที่มีความเสี่ยงหรือผลตอบแทนที่อาจสูงกว่า
                  และมีความสำคัญต่อความสำเร็จของโครงการ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-103-106.pdf"
                  target="_blank"
                  rel="noopenrt noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project twelve */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การโน้มน้าวผู้มีส่วนได้ส่วนเสีย (Influencing Stakeholders)
                </h3>
                <p>
                  <Link
                    href="https://logicmelon.com/blog-post/influence-stakeholders/"
                    target="_blank"
                    rel="noopenrt noreferrer"
                  >
                    ความเป็นผู้นำที่มีประสิทธิภาพต้องอาศัยความสามารถในการโน้มน้าวใจผู้มีส่วนได้ส่วนเสีย
                    ความสามารถในการโน้มน้าวใจผู้มีส่วนได้ส่วนเสียถือเป็นคุณสมบัติที่มีประสิทธิภาพที่สุดประการหนึ่ง
                  </Link>
                </p>
                <p>
                  เป้าหมายระยะยาวจะบรรลุผลได้ง่ายกว่าสำหรับผู้ที่มีความสามารถที่จะโน้มน้าวใจผู้อื่นมากกว่าผู้ที่ไม่มี
                  ข้อดีของการเป็นผู้มีอิทธิพลนั้นมีมากกว่าการมีปฏิสัมพันธ์กับผู้เชี่ยวชาญคนอื่นๆ
                  และอาจนำไปปรับใช้กับเหตุการณ์ในชีวิตได้สำเร็จ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-107-110.pdf"
                  target="_blank"
                  rel="noopenrt noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project thirteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลง (Change-Management
                  Structures)
                </h3>
                <p>
                  <Link
                    href="https://www.bmc.com/blogs/change-management-roles/"
                    target="_blank"
                    rel="noopenrt noreferrer"
                  >
                    ผู้จัดการการเปลี่ยนแปลงคือพนักงานที่เป็นผู้นำโปรแกรมการจัดการการเปลี่ยนแปลง
                    ผู้นำเหล่านี้มีพื้นฐานความรู้ด้านการดำเนินการเพื่อเปลี่ยนแปลงอย่างมีโครงสร้างในองค์กร
                  </Link>
                </p>
                <p>
                  การสนับสนุนการเปลี่ยนแปลง
                  หรือที่เรียกว่าการจัดการการเปลี่ยนแปลง
                  เป็นหัวใจสำคัญของการเปลี่ยนผ่านบริการ
                  ®ความสมบูรณ์ขององค์กรขึ้นอยู่กับว่าองค์กรนั้นอำนวยความสะดวกในการของเปลี่ยนแปลง
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-111-114.pdf"
                  target="_blank"
                  rel="noopenrt noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project fourteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การประคับประคองการเปลี่ยนแปลง และ
                  ข้อควรหลีกเลี่ยงในการดำเนินการเปลี่ยนแปลง
                </h3>
                <p>
                  <Link
                    href="https://www.prosci.com/blog/why-change-management-fails"
                    target="_blank"
                    rel="noopenrt noreferrer"
                  >
                    เหตุผลที่การบริหารการเปลี่ยนแปลงล้มเหลวและวิธีหลีกเลี่ยง
                  </Link>
                </p>
                <p>
                  การจัดการการเปลี่ยนแปลงเป็นกรอบการทำงานที่ช่วยให้บุคลากรสามารถรับมือกับการเปลี่ยนแปลงได้
                  และสนับสนุนให้บุคลากรผ่านกระบวนการต่างๆ
                  เมื่อวัตถุประสงค์ทางธุรกิจเปลี่ยนแปลงและเติบโตตามแนวโน้มที่เปลี่ยนแปลง
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/4 การดำเนินการเปลี่ยนแปลง-115-119.pdf"
                  target="_blank"
                  rel="noopenrt noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="pagination_bar">
            {/* Pagination */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
