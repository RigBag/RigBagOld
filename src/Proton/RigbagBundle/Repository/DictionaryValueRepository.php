<?php

namespace Proton\RigbagBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * CircleRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class DictionaryValueRepository extends EntityRepository
{
	
	public function findForDictionary( $dictionary ) {
		
		$qb		= $this->createQueryBuilder('dv');
			
		$query = $qb->where( 'dv.dictionary_id=:dictionaryId' );
		
			
		$query->setParameter( 'dictionaryId', $dictionary->getId() );
		
		$query->orderBy( 'dv.ord', 'ASC' );
		$query->addOrderBy('dv.name', 'ASC');
		
		
		$result = $query->getQuery()->getResult();
		
			
		return $result;
		
	}
	
}
