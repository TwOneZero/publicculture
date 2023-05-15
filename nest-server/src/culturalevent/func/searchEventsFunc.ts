import { Model } from 'mongoose';
import { CulturalEventDocument } from 'src/culturalevent/schema/culturalevent.schema';

//검색어 함수
export function searchEventsFunc<T extends CulturalEventDocument>(
  search: string,
  model: Model<T>,
) {
  const regex = (pattern: string) => new RegExp(`.*${pattern}.*`);
  const searchRegex = regex(search);
  return model.find({
    $or: [
      { codename: { $regex: searchRegex } },
      { title: { $regex: searchRegex } },
      { guname: { $regex: searchRegex } },
      { place: { $regex: searchRegex } },
    ],
  });
}
