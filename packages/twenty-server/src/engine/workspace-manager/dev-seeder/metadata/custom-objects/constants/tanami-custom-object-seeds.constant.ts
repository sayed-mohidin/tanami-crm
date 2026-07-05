import { type ObjectMetadataSeed } from 'src/engine/workspace-manager/dev-seeder/metadata/types/object-metadata-seed.type';

export const TANAMI_ASSIGNMENT_HISTORY_CUSTOM_OBJECT_SEED: ObjectMetadataSeed =
  {
    labelPlural: 'Assignment Histories',
    labelSingular: 'Assignment History',
    namePlural: 'assignmentHistories',
    nameSingular: 'assignmentHistory',
    icon: 'IconUserCheck',
  };

export const TANAMI_INVESTMENT_CUSTOM_OBJECT_SEED: ObjectMetadataSeed = {
  labelPlural: 'Investments',
  labelSingular: 'Investment',
  namePlural: 'investments',
  nameSingular: 'investment',
  icon: 'IconChartBar',
};

export const TANAMI_TRANSACTION_CUSTOM_OBJECT_SEED: ObjectMetadataSeed = {
  labelPlural: 'Transactions',
  labelSingular: 'Transaction',
  namePlural: 'transactions',
  nameSingular: 'transaction',
  icon: 'IconReceipt',
};

export const TANAMI_KYC_CASE_CUSTOM_OBJECT_SEED: ObjectMetadataSeed = {
  labelPlural: 'KYC Cases',
  labelSingular: 'KYC Case',
  namePlural: 'kycCases',
  nameSingular: 'kycCase',
  icon: 'IconShieldCheck',
};

export const TANAMI_TRIGGER_EVENT_CUSTOM_OBJECT_SEED: ObjectMetadataSeed = {
  labelPlural: 'Trigger Events',
  labelSingular: 'Trigger Event',
  namePlural: 'triggerEvents',
  nameSingular: 'triggerEvent',
  icon: 'IconBellRinging',
};

export const TANAMI_PLATFORM_ACTIVITY_CUSTOM_OBJECT_SEED: ObjectMetadataSeed = {
  labelPlural: 'Platform Activities',
  labelSingular: 'Platform Activity',
  namePlural: 'platformActivities',
  nameSingular: 'platformActivity',
  icon: 'IconActivity',
};

export const TANAMI_CALL_NOTE_CUSTOM_OBJECT_SEED: ObjectMetadataSeed = {
  labelPlural: 'Call Notes',
  labelSingular: 'Call Note',
  namePlural: 'callNotes',
  nameSingular: 'callNote',
  icon: 'IconPhoneCall',
};

export const TANAMI_CUSTOM_OBJECT_SEEDS: ObjectMetadataSeed[] = [
  TANAMI_ASSIGNMENT_HISTORY_CUSTOM_OBJECT_SEED,
  TANAMI_INVESTMENT_CUSTOM_OBJECT_SEED,
  TANAMI_TRANSACTION_CUSTOM_OBJECT_SEED,
  TANAMI_KYC_CASE_CUSTOM_OBJECT_SEED,
  TANAMI_TRIGGER_EVENT_CUSTOM_OBJECT_SEED,
  TANAMI_PLATFORM_ACTIVITY_CUSTOM_OBJECT_SEED,
  TANAMI_CALL_NOTE_CUSTOM_OBJECT_SEED,
];
