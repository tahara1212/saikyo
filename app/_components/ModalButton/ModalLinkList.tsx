import Link from "next/link"
import { ModalLinkListProps } from "./ModalLinkList.type"

export const ModalLinkList = ({allPostsData, path}: ModalLinkListProps) => {
  return (
    <ul className="cards-container">
      {allPostsData.map(({ id }) => (
        <li key={id} className="list-none">
          <Link href={`${path}/${id}`} className="text-gray-600 underline">
            {id}
          </Link>
        </li>
      ))}
    </ul>
  )
}