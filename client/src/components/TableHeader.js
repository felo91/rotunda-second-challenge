export default function TableHeader({titles}) {
  return (
    <thead>
        <tr>
            {
                titles.map((title) => {
                    return (
                        <th key={title} className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            {title}
                        </th>
                    );
                })
            }
        </tr>
    </thead>
  );
}