import MatomoTracker from '@datapunt/matomo-tracker-js/lib'
import { InstanceParams } from './types'

function createInstance(params: InstanceParams): MatomoTracker {
  return new MatomoTracker(params)
}

export default createInstance
