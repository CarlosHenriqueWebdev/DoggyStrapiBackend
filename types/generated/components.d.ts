import type { Schema, Attribute } from '@strapi/strapi';

export interface BookNowCallToActionBookNowCallToAction
  extends Schema.Component {
  collectionName: 'components_book_now_call_to_action_book_now_call_to_actions';
  info: {
    displayName: 'BookNowCallToAction';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Blocks & Attribute.Required;
  };
}

export interface CallToActionButtonCallToActionButton extends Schema.Component {
  collectionName: 'components_call_to_action_button_call_to_action_buttons';
  info: {
    displayName: 'CallToActionButton';
  };
  attributes: {
    ButtonName: Attribute.String & Attribute.Required;
  };
}

export interface DaycareFeaturesFeaturesRepetable extends Schema.Component {
  collectionName: 'components_daycare_features_features_repetables';
  info: {
    displayName: 'FeaturesRepetable';
    description: '';
  };
  attributes: {
    FeatureTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 18;
      }>;
    FeatureIcon: Attribute.Media & Attribute.Required;
    FeatureDescription: Attribute.Text & Attribute.Required;
    ImageAlternativeTextForAccesibility: Attribute.String & Attribute.Required;
  };
}

export interface DaycareFeaturesHomepageSiteFeatures extends Schema.Component {
  collectionName: 'components_daycare_features_homepage_site_features';
  info: {
    displayName: 'HomepageSiteFeatures';
  };
  attributes: {
    FeaturesRepetable: Attribute.Component<
      'daycare-features.features-repetable',
      true
    >;
  };
}

export interface FirstTextGroupFirstTextGroup extends Schema.Component {
  collectionName: 'components_first_text_group_first_text_groups';
  info: {
    displayName: 'FirstTextGroup';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Blocks & Attribute.Required;
  };
}

export interface FooterSocialsFooterSocials extends Schema.Component {
  collectionName: 'components_footer_socials_footer_socials';
  info: {
    displayName: 'FooterSocials';
    description: '';
  };
  attributes: {
    SocialsRepeatable: Attribute.Component<
      'socials-repeatable.socials-repeatable',
      true
    > &
      Attribute.Required;
    CopyrightText: Attribute.Blocks & Attribute.Required;
  };
}

export interface FrequentlyAskedQuestionsFrequentlyAskedQuestions
  extends Schema.Component {
  collectionName: 'components_frequently_asked_questions_frequently_asked_questions';
  info: {
    displayName: 'FrequentlyAskedQuestions';
    description: '';
  };
  attributes: {
    QuestionsAndAnswers: Attribute.Component<
      'questions-and-answers.questions-and-answers',
      true
    > &
      Attribute.Required;
    SectionTitle: Attribute.String & Attribute.Required;
    ContactUsText: Attribute.String & Attribute.Required;
    ContactUsLinkOutlinedText: Attribute.String & Attribute.Required;
  };
}

export interface HomeTestimonialsHomeTestimonials extends Schema.Component {
  collectionName: 'components_home_testimonials_home_testimonials';
  info: {
    displayName: 'HomeTestimonials';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Blocks & Attribute.Required;
    Image: Attribute.Media & Attribute.Required;
    ImageAlternativeTextForAccesibility: Attribute.String;
    GlassOverlayTransparency: Attribute.Integer & Attribute.Required;
  };
}

export interface HomepageVideosHeroSectionHeroSectionVideoFormats
  extends Schema.Component {
  collectionName: 'components_homepage_videos_hero_section_hero_section_video_formats';
  info: {
    displayName: 'HeroSectionVideoFormatAndAttributions';
    icon: 'star';
    description: '';
  };
  attributes: {
    MP4VideoForTheHeroSection: Attribute.Media & Attribute.Required;
    WebmVideoForTheHeroSection: Attribute.Media & Attribute.Required;
    VideoAttributionIfAny: Attribute.String;
    VideoSourceLinkIfAny: Attribute.String;
  };
}

export interface JoinUsJoinUs extends Schema.Component {
  collectionName: 'components_join_us_joinuses';
  info: {
    displayName: 'JoinUs';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Blocks & Attribute.Required;
    BackgroundImage: Attribute.Media & Attribute.Required;
    GlassOverlayTransparency: Attribute.Integer & Attribute.Required;
  };
}

export interface LongTextHomepageLongTextHomepage extends Schema.Component {
  collectionName: 'components_long_text_homepage_long_text_homepages';
  info: {
    displayName: 'LongTextHomepage';
    description: '';
  };
  attributes: {
    FirstTextGroup: Attribute.Component<'first-text-group.first-text-group'> &
      Attribute.Required;
    SecondTextGroup: Attribute.Component<'second-text-group.second-text-group'> &
      Attribute.Required;
    ThirdTextGroup: Attribute.Component<'third-text-group.third-text-group'>;
  };
}

export interface MediaCollectionsHomepageHomepageMediaContent
  extends Schema.Component {
  collectionName: 'components_media_collections_homepage_homepage_media_contents';
  info: {
    displayName: 'HomepageMediaContent';
    icon: 'landscape';
  };
  attributes: {
    HeroVideosFormats: Attribute.Component<'homepage-videos-hero-section.hero-section-video-formats'>;
  };
}

export interface NumberCounterCategoryNumberCounterComponent
  extends Schema.Component {
  collectionName: 'components_number_counter_category_number_counter_components';
  info: {
    displayName: 'NumberCounterComponent';
    icon: 'plus';
    description: '';
  };
  attributes: {
    NumberCounterRepetable: Attribute.Component<
      'number-counter-repeatable-category.number-counter-repetable-group',
      true
    >;
    CounterBackgroundImage: Attribute.Media & Attribute.Required;
    GlassOverlayTransparency: Attribute.Integer & Attribute.Required;
    ImageSize: Attribute.Enumeration<['small', 'medium', 'large']> &
      Attribute.Required &
      Attribute.DefaultTo<'small'>;
  };
}

export interface NumberCounterRepeatableCategoryNumberCounterRepetableGroup
  extends Schema.Component {
  collectionName: 'components_number_counter_repeatable_category_number_counter_repetable_groups';
  info: {
    displayName: 'NumberCounterRepetableGroup';
    description: '';
  };
  attributes: {
    CounterAmount: Attribute.Integer & Attribute.Required;
    CounterSubtitle: Attribute.String & Attribute.Required;
    DurationInSeconds: Attribute.Integer & Attribute.Required;
  };
}

export interface QuestionsAndAnswersQuestionsAndAnswers
  extends Schema.Component {
  collectionName: 'components_questions_and_answers_questions_and_answers';
  info: {
    displayName: 'QuestionsAndAnswers';
  };
  attributes: {
    Question: Attribute.String & Attribute.Required;
    Answer: Attribute.Text & Attribute.Required;
  };
}

export interface QuoteDividerQuoteDivider extends Schema.Component {
  collectionName: 'components_quote_divider_quote_dividers';
  info: {
    displayName: 'QuoteDivider';
    description: '';
  };
  attributes: {
    Quote: Attribute.String & Attribute.Required;
    BackgroundImage: Attribute.Media & Attribute.Required;
    GlassOverlayTransparency: Attribute.Integer & Attribute.Required;
  };
}

export interface SecondTextGroupSecondTextGroup extends Schema.Component {
  collectionName: 'components_second_text_group_second_text_groups';
  info: {
    displayName: 'SecondTextGroup';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Blocks & Attribute.Required;
  };
}

export interface ServicesSectionServicesSection extends Schema.Component {
  collectionName: 'components_services_section_services_sections';
  info: {
    displayName: 'ServicesSection';
    description: '';
  };
  attributes: {
    ServicesText: Attribute.Component<'services.services', true> &
      Attribute.Required;
    SectionTitle: Attribute.String & Attribute.Required;
  };
}

export interface ServicesServices extends Schema.Component {
  collectionName: 'components_services_services';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    Image: Attribute.Media & Attribute.Required;
    ImageAttributionIfAny: Attribute.String;
    ImageSourceIfAny: Attribute.String;
    ImageAlternativeTextForAccesibility: Attribute.String & Attribute.Required;
  };
}

export interface SocialsRepeatableSocialsRepeatable extends Schema.Component {
  collectionName: 'components_socials_repeatable_socials_repeatables';
  info: {
    displayName: 'SocialsRepeatable';
  };
  attributes: {
    Icon: Attribute.Media & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
    ImageAlternativeTextForAccesibility: Attribute.String & Attribute.Required;
  };
}

export interface TestimonialVideoTestimonialVideo extends Schema.Component {
  collectionName: 'components_testimonial_video_testimonial_videos';
  info: {
    displayName: 'TestimonialVideo';
    description: '';
  };
  attributes: {
    MP4Video: Attribute.Media & Attribute.Required;
    WebmVideo: Attribute.Media & Attribute.Required;
    AttributionIfAny: Attribute.String;
    SourceLinkIfAny: Attribute.String;
  };
}

export interface ThirdTextGroupThirdTextGroup extends Schema.Component {
  collectionName: 'components_third_text_group_third_text_groups';
  info: {
    displayName: 'ThirdTextGroup';
    description: '';
  };
  attributes: {
    IllustrationImage: Attribute.Media & Attribute.Required;
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Blocks & Attribute.Required;
    ImageAlternativeTextForAccesibility: Attribute.String & Attribute.Required;
    AttributionIfAny: Attribute.String;
    SourceLinkIfAny: Attribute.String;
  };
}

export interface VideoThumbnailVideoThumbnail extends Schema.Component {
  collectionName: 'components_video_thumbnail_video_thumbnails';
  info: {
    displayName: 'VideoThumbnail';
  };
  attributes: {
    ThumbnailOptional: Attribute.Media;
    AttributionIfAny: Attribute.String;
    SourceLinkIfAny: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'book-now-call-to-action.book-now-call-to-action': BookNowCallToActionBookNowCallToAction;
      'call-to-action-button.call-to-action-button': CallToActionButtonCallToActionButton;
      'daycare-features.features-repetable': DaycareFeaturesFeaturesRepetable;
      'daycare-features.homepage-site-features': DaycareFeaturesHomepageSiteFeatures;
      'first-text-group.first-text-group': FirstTextGroupFirstTextGroup;
      'footer-socials.footer-socials': FooterSocialsFooterSocials;
      'frequently-asked-questions.frequently-asked-questions': FrequentlyAskedQuestionsFrequentlyAskedQuestions;
      'home-testimonials.home-testimonials': HomeTestimonialsHomeTestimonials;
      'homepage-videos-hero-section.hero-section-video-formats': HomepageVideosHeroSectionHeroSectionVideoFormats;
      'join-us.join-us': JoinUsJoinUs;
      'long-text-homepage.long-text-homepage': LongTextHomepageLongTextHomepage;
      'media-collections-homepage.homepage-media-content': MediaCollectionsHomepageHomepageMediaContent;
      'number-counter-category.number-counter-component': NumberCounterCategoryNumberCounterComponent;
      'number-counter-repeatable-category.number-counter-repetable-group': NumberCounterRepeatableCategoryNumberCounterRepetableGroup;
      'questions-and-answers.questions-and-answers': QuestionsAndAnswersQuestionsAndAnswers;
      'quote-divider.quote-divider': QuoteDividerQuoteDivider;
      'second-text-group.second-text-group': SecondTextGroupSecondTextGroup;
      'services-section.services-section': ServicesSectionServicesSection;
      'services.services': ServicesServices;
      'socials-repeatable.socials-repeatable': SocialsRepeatableSocialsRepeatable;
      'testimonial-video.testimonial-video': TestimonialVideoTestimonialVideo;
      'third-text-group.third-text-group': ThirdTextGroupThirdTextGroup;
      'video-thumbnail.video-thumbnail': VideoThumbnailVideoThumbnail;
    }
  }
}
