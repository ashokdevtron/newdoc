import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Kubernetes Made Simple',
    Svg: require('@site/static/img/kubernetes.svg').default,
    description: (
      <>
        Simplify your Kubernetes journey with Devtron. We take the complexity out 
        of managing containers and clusters, so you can focus on your code.
      </>
    ),
  },
  {
    title: 'Focus on Innovation',
    Svg: require('@site/static/img/innovation.svg').default,
    description: (
      <>
        Concentrate on developing innovative features while we handle
        the complexities of application deployment and management.
      </>
    ),
  },
  {
    title: 'Effortless Deployment',
    Svg: require('@site/static/img/rocket.svg').default,
    description: (
      <>
        Devtron is built to simplify and streamline your deployment process, 
        enabling you to deploy applications with ease and confidence.
      </>
    ),
  }
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
