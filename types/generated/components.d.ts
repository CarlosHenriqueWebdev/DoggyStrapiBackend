import type { Schema, Attribute } from '@strapi/strapi';

export interface BenefitsListBenefitsList extends Schema.Component {
  collectionName: 'components_benefits_list_benefits_lists';
  info: {
    displayName: 'BenefitsList';
  };
  attributes: {
    Item: Attribute.String & Attribute.Required;
  };
}

export interface BenefitsBenefits extends Schema.Component {
  collectionName: 'components_benefits_benefits';
  info: {
    displayName: 'Benefits';
    description: '';
  };
  attributes: {
    BenefitsList: Attribute.Component<'benefits-list.benefits-list', true> &
      Attribute.Required;
  };
}

export interface CallToActionCallToAction extends Schema.Component {
  collectionName: 'components_call_to_action_call_to_actions';
  info: {
    displayName: 'CallToAction';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Blocks & Attribute.Required;
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
  };
}

export interface DaycareFeaturesHomepageSiteFeatures extends Schema.Component {
  collectionName: 'components_daycare_features_homepage_site_features';
  info: {
    displayName: 'HomepageSiteFeatures';
    description: '';
  };
  attributes: {
    FeaturesRepetable: Attribute.Component<
      'daycare-features.features-repetable',
      true
    > &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
  };
}

export interface DogsInformationDogsInformation extends Schema.Component {
  collectionName: 'components_dogs_information_dogs_informations';
  info: {
    displayName: 'DogsInformation';
  };
  attributes: {
    DogName: Attribute.String & Attribute.Required;
    Breed: Attribute.String & Attribute.Required;
    Age: Attribute.String & Attribute.Required;
    AdditionalInformation: Attribute.Text & Attribute.Required;
    SpreyedNeutered: Attribute.String & Attribute.Required;
    VaccinationStatus: Attribute.String & Attribute.Required;
  };
}

export interface EmergencyContactEmergencyContact extends Schema.Component {
  collectionName: 'components_emergency_contact_emergency_contacts';
  info: {
    displayName: 'EmergencyContact';
  };
  attributes: {
    EmergencyName: Attribute.String & Attribute.Required;
    EmergencyPhoneNumber: Attribute.String & Attribute.Required;
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

export interface HeroBaseUtilsHeroBaseUtils extends Schema.Component {
  collectionName: 'components_hero_base_utils_hero_base_utils';
  info: {
    displayName: 'HeroBaseUtils';
    description: '';
  };
  attributes: {
    BackgroundImage: Attribute.Media & Attribute.Required;
    BackgroundOverlay: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 9;
        },
        number
      >;
    HeroText: Attribute.Component<'hero-text.hero-text'> & Attribute.Required;
    BackgroundPosition: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'center center'>;
  };
}

export interface HeroTextVideoHeroTextVideo extends Schema.Component {
  collectionName: 'components_hero_text_video_hero_text_videos';
  info: {
    displayName: 'HeroTextVideo';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
  };
}

export interface HeroTextHeroText extends Schema.Component {
  collectionName: 'components_hero_text_hero_texts';
  info: {
    displayName: 'HeroText';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
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
  };
}

export interface ImportantFieldsImportantFields extends Schema.Component {
  collectionName: 'components_important_fields_important_fields';
  info: {
    displayName: 'ImportantFields';
  };
  attributes: {
    BoldText: Attribute.String & Attribute.Required;
    SubText: Attribute.String & Attribute.Required;
  };
}

export interface InquiriesRepeatableInquiriesRepeatable
  extends Schema.Component {
  collectionName: 'components_inquiries_repeatable_inquiries_repeatables';
  info: {
    displayName: 'InquiriesRepeatable';
  };
  attributes: {
    InquiryName: Attribute.String & Attribute.Required;
  };
}

export interface InquiryFieldsInquiryFields extends Schema.Component {
  collectionName: 'components_inquiry_fields_inquiry_fields';
  info: {
    displayName: 'InquiryFields';
    description: '';
  };
  attributes: {};
}

export interface IntroductionIntroduction extends Schema.Component {
  collectionName: 'components_introduction_introductions';
  info: {
    displayName: 'Introduction';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Blocks & Attribute.Required;
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

export interface LocationFieldsLocationContactFormFields
  extends Schema.Component {
  collectionName: 'components_location_fields_location_contact_form_fields';
  info: {
    displayName: 'LocationContactFormFields';
    description: '';
  };
  attributes: {
    LocationsRepeatable: Attribute.Component<
      'locations-repeatable.locations-repeatable',
      true
    >;
    InquiriesRepeatable: Attribute.Component<
      'inquiries-repeatable.inquiries-repeatable',
      true
    >;
  };
}

export interface LocationsListLocationsList extends Schema.Component {
  collectionName: 'components_locations_list_locations_lists';
  info: {
    displayName: 'LocationsList';
  };
  attributes: {
    RepeatableFieldsList: Attribute.Component<
      'repeatable-fields-list.repeatable-fields-list',
      true
    >;
  };
}

export interface LocationsRepeatableLocationsRepeatable
  extends Schema.Component {
  collectionName: 'components_locations_repeatable_locations_repeatables';
  info: {
    displayName: 'LocationsRepeatable';
  };
  attributes: {
    LocationName: Attribute.String & Attribute.Required;
  };
}

export interface LongTextHomepageLongTextHomepage extends Schema.Component {
  collectionName: 'components_long_text_homepage_long_text_homepages';
  info: {
    displayName: 'LongTextHomepage';
    description: '';
  };
  attributes: {
    ThirdTextGroup: Attribute.Component<'third-text-group.third-text-group'>;
    FirstText: Attribute.Component<'text-reusable-component.text-reusable-component'> &
      Attribute.Required;
    SecondText: Attribute.Component<'text-reusable-component.text-reusable-component'> &
      Attribute.Required;
  };
}

export interface MainContentMainContent extends Schema.Component {
  collectionName: 'components_main_content_main_contents';
  info: {
    displayName: 'MainContent';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
  };
}

export interface MediaCollectionsHomepageHomepageMediaContent
  extends Schema.Component {
  collectionName: 'components_media_collections_homepage_homepage_media_contents';
  info: {
    displayName: 'HomepageMediaContent';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    HeroImage: Attribute.Component<'positions-hero.positions-hero'>;
    HeroText: Attribute.Component<'introduction.introduction'>;
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
    > &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
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

export interface OurHistoryOurHistory extends Schema.Component {
  collectionName: 'components_our_history_our_histories';
  info: {
    displayName: 'OurHistory';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Blocks & Attribute.Required;
  };
}

export interface PositionsHeroPositionsHero extends Schema.Component {
  collectionName: 'components_positions_hero_positions_heroes';
  info: {
    displayName: 'PositionsHero';
  };
  attributes: {
    BackgroundImage: Attribute.Media & Attribute.Required;
    BackgroundPosition: Attribute.Integer & Attribute.Required;
    BackgroundOverlay: Attribute.JSON & Attribute.Required;
  };
}

export interface PricingPricing extends Schema.Component {
  collectionName: 'components_pricing_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    TableItems: Attribute.Component<'table-items.table-items', true>;
  };
}

export interface PrivacyPolicyPrivacyPolicy extends Schema.Component {
  collectionName: 'components_privacy_policy_privacy_policies';
  info: {
    displayName: 'PrivacyPolicy';
  };
  attributes: {
    TitleAndDescription: Attribute.Component<
      'text-reusable-component.text-reusable-component',
      true
    > &
      Attribute.Required;
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

export interface ReasonsListItemReasonsListItem extends Schema.Component {
  collectionName: 'components_reasons_list_item_reasons_list_items';
  info: {
    displayName: 'ReasonsListItem';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Blocks & Attribute.Required;
  };
}

export interface RepeatableFieldsListRepeatableFieldsList
  extends Schema.Component {
  collectionName: 'components_repeatable_fields_list_repeatable_fields_lists';
  info: {
    displayName: 'RepeatableFieldsList';
    description: '';
  };
  attributes: {
    Referral: Attribute.String & Attribute.Required;
  };
}

export interface RepeatableFieldsRepeatableFields extends Schema.Component {
  collectionName: 'components_repeatable_fields_repeatable_fields';
  info: {
    displayName: 'RepeatableFields';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Blocks & Attribute.Required;
    Image: Attribute.Media & Attribute.Required;
  };
}

export interface SeeAboutUsSeeAboutUs extends Schema.Component {
  collectionName: 'components_see_about_us_see_aboutuses';
  info: {
    displayName: 'SeeAboutUs';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Blocks & Attribute.Required;
    ImageKenBurns: Attribute.Media & Attribute.Required;
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
  };
}

export interface SocialsRepeatableSocialsRepeatable extends Schema.Component {
  collectionName: 'components_socials_repeatable_socials_repeatables';
  info: {
    displayName: 'SocialsRepeatable';
    description: '';
  };
  attributes: {
    Icon: Attribute.Media & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
    ImageAlternativeTextForAccesibility: Attribute.String & Attribute.Required;
  };
}

export interface TableItemsTableItems extends Schema.Component {
  collectionName: 'components_table_items_table_items';
  info: {
    displayName: 'TableItems';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Price: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
  };
}

export interface TermsAndConditionsTermsAndConditions extends Schema.Component {
  collectionName: 'components_terms_and_conditions_terms_and_conditions';
  info: {
    displayName: 'TermsAndConditions';
  };
  attributes: {
    TitleAndDescription: Attribute.Component<
      'text-reusable-component.text-reusable-component',
      true
    > &
      Attribute.Required;
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

export interface TestimonialsRepeatableTestimonialsRepeatable
  extends Schema.Component {
  collectionName: 'components_testimonials_repeatable_testimonials_repeatables';
  info: {
    displayName: 'TestimonialsRepeatable';
    description: '';
  };
  attributes: {
    ProfilePicture: Attribute.Media & Attribute.Required;
    Name: Attribute.String & Attribute.Required;
    TestimonialText: Attribute.Text & Attribute.Required;
    YoutubeVideoID: Attribute.String & Attribute.Required;
  };
}

export interface TextReusableComponentTextReusableComponent
  extends Schema.Component {
  collectionName: 'components_text_reusable_component_text_reusable_components';
  info: {
    displayName: 'TextReusableComponent';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Blocks & Attribute.Required;
  };
}

export interface TextText extends Schema.Component {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'Text';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    SubmissionDisclaimer: Attribute.Blocks & Attribute.Required;
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

export interface WhyUsWhyUs extends Schema.Component {
  collectionName: 'components_why_us_whyuses';
  info: {
    displayName: 'WhyUs';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    RepeatableFields: Attribute.Component<
      'reasons-list-item.reasons-list-item',
      true
    > &
      Attribute.Required;
  };
}

export interface WokersTestimonialsWokersTestimonials extends Schema.Component {
  collectionName: 'components_wokers_testimonials_wokers_testimonials';
  info: {
    displayName: 'WokersTestimonials';
    description: '';
  };
  attributes: {
    BackgroundImage: Attribute.Media & Attribute.Required;
    BackgroundPosition: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'center center'>;
    YoutubeVideoID: Attribute.String & Attribute.Required;
  };
}

export interface WorkerInformationWorkerInformation extends Schema.Component {
  collectionName: 'components_worker_information_worker_informations';
  info: {
    displayName: 'WorkerInformation';
  };
  attributes: {
    WorkerImage: Attribute.Media & Attribute.Required;
    Name: Attribute.String & Attribute.Required;
    Role: Attribute.String & Attribute.Required;
    FacilityLocation: Attribute.String & Attribute.Required;
  };
}

export interface YourHistoryYourHistory extends Schema.Component {
  collectionName: 'components_your_history_your_histories';
  info: {
    displayName: 'YourHistory';
  };
  attributes: {
    RepeatableFields: Attribute.Component<
      'repeatable-fields.repeatable-fields',
      true
    > &
      Attribute.Required;
  };
}

export interface YourTeamYourTeam extends Schema.Component {
  collectionName: 'components_your_team_your_teams';
  info: {
    displayName: 'YourTeam';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    WorkerInformation: Attribute.Component<
      'worker-information.worker-information',
      true
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'benefits-list.benefits-list': BenefitsListBenefitsList;
      'benefits.benefits': BenefitsBenefits;
      'call-to-action.call-to-action': CallToActionCallToAction;
      'daycare-features.features-repetable': DaycareFeaturesFeaturesRepetable;
      'daycare-features.homepage-site-features': DaycareFeaturesHomepageSiteFeatures;
      'dogs-information.dogs-information': DogsInformationDogsInformation;
      'emergency-contact.emergency-contact': EmergencyContactEmergencyContact;
      'first-text-group.first-text-group': FirstTextGroupFirstTextGroup;
      'footer-socials.footer-socials': FooterSocialsFooterSocials;
      'frequently-asked-questions.frequently-asked-questions': FrequentlyAskedQuestionsFrequentlyAskedQuestions;
      'hero-base-utils.hero-base-utils': HeroBaseUtilsHeroBaseUtils;
      'hero-text-video.hero-text-video': HeroTextVideoHeroTextVideo;
      'hero-text.hero-text': HeroTextHeroText;
      'home-testimonials.home-testimonials': HomeTestimonialsHomeTestimonials;
      'homepage-videos-hero-section.hero-section-video-formats': HomepageVideosHeroSectionHeroSectionVideoFormats;
      'important-fields.important-fields': ImportantFieldsImportantFields;
      'inquiries-repeatable.inquiries-repeatable': InquiriesRepeatableInquiriesRepeatable;
      'inquiry-fields.inquiry-fields': InquiryFieldsInquiryFields;
      'introduction.introduction': IntroductionIntroduction;
      'join-us.join-us': JoinUsJoinUs;
      'location-fields.location-contact-form-fields': LocationFieldsLocationContactFormFields;
      'locations-list.locations-list': LocationsListLocationsList;
      'locations-repeatable.locations-repeatable': LocationsRepeatableLocationsRepeatable;
      'long-text-homepage.long-text-homepage': LongTextHomepageLongTextHomepage;
      'main-content.main-content': MainContentMainContent;
      'media-collections-homepage.homepage-media-content': MediaCollectionsHomepageHomepageMediaContent;
      'number-counter-category.number-counter-component': NumberCounterCategoryNumberCounterComponent;
      'number-counter-repeatable-category.number-counter-repetable-group': NumberCounterRepeatableCategoryNumberCounterRepetableGroup;
      'our-history.our-history': OurHistoryOurHistory;
      'positions-hero.positions-hero': PositionsHeroPositionsHero;
      'pricing.pricing': PricingPricing;
      'privacy-policy.privacy-policy': PrivacyPolicyPrivacyPolicy;
      'questions-and-answers.questions-and-answers': QuestionsAndAnswersQuestionsAndAnswers;
      'quote-divider.quote-divider': QuoteDividerQuoteDivider;
      'reasons-list-item.reasons-list-item': ReasonsListItemReasonsListItem;
      'repeatable-fields-list.repeatable-fields-list': RepeatableFieldsListRepeatableFieldsList;
      'repeatable-fields.repeatable-fields': RepeatableFieldsRepeatableFields;
      'see-about-us.see-about-us': SeeAboutUsSeeAboutUs;
      'services-section.services-section': ServicesSectionServicesSection;
      'services.services': ServicesServices;
      'socials-repeatable.socials-repeatable': SocialsRepeatableSocialsRepeatable;
      'table-items.table-items': TableItemsTableItems;
      'terms-and-conditions.terms-and-conditions': TermsAndConditionsTermsAndConditions;
      'testimonial-video.testimonial-video': TestimonialVideoTestimonialVideo;
      'testimonials-repeatable.testimonials-repeatable': TestimonialsRepeatableTestimonialsRepeatable;
      'text-reusable-component.text-reusable-component': TextReusableComponentTextReusableComponent;
      'text.text': TextText;
      'third-text-group.third-text-group': ThirdTextGroupThirdTextGroup;
      'video-thumbnail.video-thumbnail': VideoThumbnailVideoThumbnail;
      'why-us.why-us': WhyUsWhyUs;
      'wokers-testimonials.wokers-testimonials': WokersTestimonialsWokersTestimonials;
      'worker-information.worker-information': WorkerInformationWorkerInformation;
      'your-history.your-history': YourHistoryYourHistory;
      'your-team.your-team': YourTeamYourTeam;
    }
  }
}
