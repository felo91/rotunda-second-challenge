export default function TableRowIssue({issue}) {

    const handleIssueClick = () => {
        console.log({issue});
        window.open(issue.url, '_blank', 'noreferrer');
    }

    return (
        <tr onClick={handleIssueClick}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <div className="ml-3">
                        <p className={`whitespace-no-wrap font-bold text-lg ${issue.score >= 100 ?"text-red-600":"text-gray-900"}`}>
                           { issue.score }
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex flex-col justify-between">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">
                            { issue.title }
                        </div>
                        <p className="text-gray-700 text-base">
                        #{ issue.number }, opened { issue.businessDays } days ago by { issue.opener ? issue.opener.username: "" }
                        </p>
                    </div>
                    <div className="flex items center">
                        {
                            issue.labels && issue.labels.map((label) => {
                                return (
                                    <span
                                        key={label.id}
                                        className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 opacity-50 rounded-full" style={{backgroundColor: label.color}}></span>
                                        <span className="relative">{label.name}</span>
                                    </span>
                                );
                            })
                        }
                    </div>
                </div>
            </td>
        </tr>
    );
}