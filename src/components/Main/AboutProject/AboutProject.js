import React from "react";

function AboutProject() {
  return (
    <>
      <section id="about-project" className="about-project">
        <div className="about-project__row">
          <h2 className="about-project__title">О проекте</h2>
        </div>
        <div className="about-project__wrap">
          <div className="about-project__inner">
            <h3 className="about-project__sybtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__inner">
            <h3 className="about-project__sybtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__elements">
          <p className="about-project__element about-project__element_font1">
            1 неделя
          </p>
          <p className="about-project__element about-project__element_font2">
            4 недели
          </p>
          <p className="about-project__element about-project__element_color-text">
            Back-end
          </p>
          <p className="about-project__element about-project__element_color-text">
            Front-end
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutProject;
