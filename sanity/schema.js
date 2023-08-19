import blockContent from './schemas/blockContent'
import category from './schemas/category'
import event from './schemas/event'
import author from './schemas/author'
import executive from './schemas/executive'
import alumni from './schemas/alumni'
import placement from './schemas/placements'
import hostel from './schemas/hostel'
import note from './schemas/note'

export const schema = {
  types: [event, author, category, blockContent,executive,alumni,placement,hostel,note],
}
