import { observer } from 'mobx-react';
import Link from 'next/link';
import { useStore } from '../../store/rootStore';

function Test() {
	// 测试用

	const { Counter } = useStore();
	return (
		<>
			<div>hello</div>
			<p> {Counter.count} </p>
			<Link href="/">
				<div>跳转</div>
			</Link>
		</>
	);
}

export default observer(Test);
