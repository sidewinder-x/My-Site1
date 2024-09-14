import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';



const FeatureList = [
  {
    title: 'Полный разбор заданий',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        На сайте представлен детальный разбор всех типов заданий ЕГЭ по информатике. 
        Это помогает понять каждый этап решения и избежать типичных ошибок.
      </>
    ),
  },
  {
    title: 'Практические примеры',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       К каждому заданию прилагаются примеры с пошаговыми объяснениями. 
       Вы сможете сразу применять теорию на практике и проверить свои знания.
      </>
    ),
  },
  {
    title: 'Удобная навигация',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Простая структура сайта позволяет легко находить нужные материалы.
        Все задания организованы по разделам, чтобы вы могли быстро перейти к интересующей теме.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Основная функция для отображения главной страницы
function renderHomepage() {
  // Достоинства сайта
  const advantages = `
    <section id="advantages">
      <h2>Достоинства нашего сайта</h2>
      <ul>
        <li><strong>Полный разбор заданий:</strong> На сайте представлен детальный разбор всех типов заданий ЕГЭ по информатике. Это помогает понять каждый этап решения и избежать типичных ошибок.</li>
        <li><strong>Практические примеры:</strong> К каждому заданию прилагаются примеры с пошаговыми объяснениями. Вы сможете сразу применять теорию на практике и проверить свои знания.</li>
        <li><strong>Удобная навигация:</strong> Простая структура сайта позволяет легко находить нужные материалы. Все задания организованы по разделам, чтобы вы могли быстро перейти к интересующей теме.</li>
      </ul>
    </section>
  `;

  // Блок "Как начать подготовку"
  const howToStart = `
    <section id="how-to-start" style="margin-top: 40px;">
      <h2>Как начать подготовку?</h2>
      <div class="start-steps">
        <div class="step">
          <h3>1. Выберите раздел</h3>
          <p>Начните с наиболее сложных для вас тем или пройдите весь курс последовательно. Каждая тема содержит теорию, практические задания и разбор ошибок.</p>
        </div>
        
        <div class="step">
          <h3>2. Следуйте рекомендациям</h3>
          <p>Мы разработали эффективные стратегии и советы для подготовки. Следуйте нашим рекомендациям, чтобы подготовка прошла максимально продуктивно.</p>
        </div>
        
        <div class="step">
          <h3>3. Проверяйте свои результаты</h3>
          <p>После каждого задания есть тесты и примеры для самопроверки. Это поможет вам отслеживать свой прогресс и корректировать подготовку по необходимости.</p>
        </div>
        
        <div class="step">
          <h3>4. Регулярно практикуйтесь</h3>
          <p>ЕГЭ требует не только знаний, но и навыков быстрого решения задач. Чем больше вы практикуетесь, тем увереннее будете себя чувствовать на экзамене.</p>
        </div>
      </div>
    </section>
  `;

  // Вставка всего контента в основную страницу
  document.body.innerHTML = `
    <main>
      ${advantages}
      ${howToStart}
    </main>
  `;
}

// Вызов функции рендера главной страницы
document.addEventListener('DOMContentLoaded', renderHomepage);