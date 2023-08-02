import React from 'react';
import {
  Image as JssImage,
  Link as JssLink,
  RichText as JssRichText,
  ImageField,
  Field,
  LinkField,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  PromoIcon: ImageField;
  PromoText: Field<string>;
  PromoLink: LinkField;
  PromoText2: Field<string>;
}

type BannerProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const BannerDefaultComponent = (props: BannerProps): JSX.Element => (
  <div className={`component banner ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Banner</span>
    </div>
  </div>
);

export const Default = (props: BannerProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component banner ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="field-bannericon">
            <JssImage field={props.fields.PromoIcon} />
          </div>
          <div className="banner-text">
            <div>
              <div className="field-bannertext">
                <JssRichText field={props.fields.PromoText} />
              </div>
            </div>
            <div className="field-bannerlink">
              <JssLink field={props.fields.PromoLink} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <BannerDefaultComponent {...props} />;
};

export const WithText = (props: BannerProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component banner ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="field-bannericon">
            <JssImage field={props.fields.PromoIcon} />
          </div>
          <div className="banner-text">
            <div>
              <div className="field-bannertext">
                <Text className="banner-text" field={props.fields.PromoText} />
              </div>
            </div>
            <div className="field-bannertext">
              <Text className="banner-text" field={props.fields.PromoText2} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <BannerDefaultComponent {...props} />;
};
